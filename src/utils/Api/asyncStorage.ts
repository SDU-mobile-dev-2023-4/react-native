import z from 'zod';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Data format for the async storage
 */
type StorageData = z.infer<typeof StorageDataSchema>;

/**
 * Schema for the async storage data
 */
const StorageDataSchema = z.object({
    data: z.unknown(),
    expires: z.number(),
});

/**
 * Save the state to the async storage
 * 
 * @param key Key of the state
 * @param value The value of the state to be saved. Must be an object
 * @param time Time in minutes before the state expires. Default is 10 minutes
 */
export const storeData = async (key: string, value: unknown, time: number = 10): Promise<void> => {
    try {
        // Purge expired states
        purgeData(key);

        // Format time as milliseconds
        time = time * 60 * 1000;

        // Data
        const data = {
            data: value,
            expires: Date.now() + time,
        } as StorageData;

        // Jsonify
        const jsonValue = JSON.stringify(data);

        // Store
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error("There was an issue saving the state", e);
    }
};

/**
 * Load the state from the async storage
 * 
 * @param key Key of the state
 * @returns The state as an unknown object
 */
export const getData = async (key: string): Promise<StorageData | false> => {
    try {
        // Purge expired states
        purgeData(key);

        // Get the item
        const jsonValue = await AsyncStorage.getItem(key);

        // End if there was no item
        if (!jsonValue) return false;

        // Parse the item
        const data = JSON.parse(jsonValue);

        // Validate the data
        const parsedData = StorageDataSchema.parse(data);

        // Return the data
        return parsedData;
    } catch (e) {
        console.error("There was an issue getting the state", e);
        return false;
    }
};

/**
 * Removes expired states from the async storage
 * 
 * @param key Key of the state
 * @returns void
 */
const purgeData = async (key: string): Promise<void> => {
    try {
        // Get the item
        const jsonValue = await AsyncStorage.getItem(key);
        if (!jsonValue) return;

        // Parse the item
        const data = StorageDataSchema.parse(JSON.parse(jsonValue));

        // Remove the item if it has expired
        if (data.expires < Date.now()) {
            await AsyncStorage.removeItem(key);
        }
    } catch (e) {
        // Error retrieving data
    }
}
