import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { H3 } from './Text/H3';

interface FilterOption {
    filterGroup: string
    filterName: string
    onToggle?: (checked: boolean, filterName: string, filterGroup: string) => void;
}

const FilterButton: React.FC<FilterOption> = ({ onToggle, filterName, filterGroup }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (onToggle) {
            onToggle(newCheckedState, filterName, filterGroup);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.filter} >
            <AntDesign name="checkcircleo" size={24} color={isChecked ? "green" : "black"} style={{ marginRight: 12 }} />
            <H3>{filterName}</H3>
        </TouchableOpacity>
    );
};

/**
 * Cool filter button component
 * @param filterName - The name of the filter
 * @param onToggle - A function that is called when the filter is toggled
 */
export default FilterButton;

const styles = StyleSheet.create({
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
})