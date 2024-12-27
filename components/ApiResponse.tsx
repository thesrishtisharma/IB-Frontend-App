import React from 'react';
import {ThemedView} from "@/components/ThemedView";

import {StyleSheet, Text, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {
    CommonStyles
} from "@/components/common_styles/CommonStyles";
import {ExternalLink} from "@/components/ExternalLink";
import {Collapsible} from "@/components/Collapsible";

interface ApiResponseProps{
    myData: any
}
export function ApiResponse({myData}: ApiResponseProps){
    if(!myData) return null;

    return (
        <ThemedView>
            <ThemedView style={CommonStyles.stepContainer}>
                <ThemedText type={"subtitle"}>Indian Bank branch details for {myData.branchData[0].Zone}</ThemedText>
            </ThemedView>

            {myData.branchData.map((branch: any, index: any)=>{
                return (
                <ThemedView key={index+'_MainView'} style={styles.linebreak}>
                    <Collapsible key={index+'_CollapseView'} title={branch["Branch 1 (IB)"]}>
                        <ThemedView key={index+'_address'} style={styles.linebreak}>
                            <ThemedText>
                                <Text key={index+'_addressKey'} style={{ fontWeight: 'bold' }}>Address: </Text>
                                {branch["Address"]}
                            </ThemedText>
                        </ThemedView>
                        <ThemedView key={index+'_contact'} style={styles.linebreak}>
                            <ThemedText>
                                <Text key={index+'_contactKey'} style={{ fontWeight: 'bold' }}>Contact: </Text>
                                {branch["Contact No"]}
                            </ThemedText>
                        </ThemedView>
                        <ThemedView key={index+'_email'} style={styles.linebreak}>
                            <ThemedText>
                                <Text key={index+'_emailKey'} style={{ fontWeight: 'bold' }}>E-Mail ID: </Text>
                                {branch["E-Mail"]}
                            </ThemedText>
                        </ThemedView>
                        <ThemedView key={index+'_ifsc'} style={styles.linebreak}>
                            <ThemedText>
                                <Text key={index+'_ifscKey'} style={{ fontWeight: 'bold' }}>IFSC Code: </Text>
                                {branch["New IFSC Code"]}
                            </ThemedText>
                        </ThemedView>
                    </Collapsible>
                </ThemedView>
                )
            })}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    linebreak:{
        marginBottom: 8
    }
})