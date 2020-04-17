import React from "react";
import { View } from "react-native";
import {useTranslation} from "react-i18next";
import {TextInput, HelperText} from "react-native-paper";
import {Field} from "react-final-form";
import {Dropdown} from "react-native-material-dropdown";
import {black06} from "../../consts/colors";
import styles from "./styles";

const FormFieldWithDropdown = ({ name, style, ...inputProps }) => {
    const {t} = useTranslation();
    return (
        <Field
            {...{ name }}
            render={({input, meta}) => {
                const { onChange, value } = input;
                const isError = !!meta.error && meta.touched;
                return (
                    <View style={style}>
                        <Dropdown
                            {...inputProps}
                            containerStyle={styles.dropdown}
                            baseColor={black06}
                            onChangeText={onChange}
                            renderBase={() => <TextInput
                                {...inputProps}
                                value={value}
                                mode="flat"
                                error={isError}
                            />}
                        />
                        <HelperText
                            type="error"
                            visible={isError}
                        >
                            {t(meta.error)}
                        </HelperText>
                    </View>
                );
            }}
        />
    );
};

export default FormFieldWithDropdown;
