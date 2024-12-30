import {
    Button,
    StyleSheet,
    useColorScheme,
    View
} from "react-native";

import {ThemedView} from "@/components/ThemedView";
import {Picker} from "@react-native-picker/picker";
import {useEffect, useState} from "react";
import {ThemedText} from "@/components/ThemedText";
import { CommonStyles } from "@/components/common_styles/CommonStyles";

interface DropDownProps {
    onApiResponse: (data: any, message: string) => void; // Define prop for API response handler
}

export function DropDown({onApiResponse}: DropDownProps) {
    const [zones, setZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState<string>(); // State to capture on change zone
    const [message, setMessage] = useState<any>(''); // State to store the clicked zone
    const [loading, setLoading] = useState<boolean>(false); // Loading state

    useEffect(() => {
        const fetchZones = async () =>{
            try{
                const response = await fetch("https://ib-backend-api-node-service.onrender.com/api/v2/IB/fetchZones");
                if (response.ok){
                    const data = await response.json();
                    setZones(data.zones);
                } else {
                    setZones([]);
                    console.error("Failed to fetch zones : ", response.status)
                }
            } catch(error){
                setZones([]);
                console.error(error)
            } finally {
                console.log("In finally")
            }
        }
        fetchZones();
    }, []);

    // Use useEffect to log zones after it updates
    useEffect(() => {
        //console.log('Updated zones:', zones);
    }, [zones]);  // Dependency array, ensuring this runs after zones are updated

    const clickMe = async () => {
        if (selectedZone == null) {
            setMessage("Please select a valid dropdown from the list");
            onApiResponse(null, "Invalid Option");
        }
        else {
            await fetchData(selectedZone);
        }
    }

    const fetchData = async (zone: string) => {
        setLoading(true);
        try {
            // Replace this URL with your actual API endpoint
            const response = await fetch(`https://ib-backend-api-node-service.onrender.com/api/v2/IB/fetchBranches?zone=`+zone); //https://api.example.com/data?zone=${zone}
            const data = await response.json();
            onApiResponse(data, "Data fetched successfully");
        } catch (error) {
            onApiResponse(null, "An error occurred")
        } finally {
            setLoading(false);
        }
    };

    const colorScheme = useColorScheme();
    const dynamicStyles = StyleSheet.create({
        button: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: colorScheme === 'light' ? '#A1CEDC' : '#1D3D48',
            borderRadius: 9
        }
    });

    return (
        <ThemedView>
            <Picker
                selectedValue={selectedZone}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedZone(itemIndex === 0 ? undefined : itemValue);
                    setMessage("");
                }}>
                <Picker.Item label={'-- Select a Zone --'}
                             value={null} enabled={false}/>
                {zones.map((zone, index) => (
                    <Picker.Item key={index} label={zone} value={zone}/>
                ))}
            </Picker>
            <View style={dynamicStyles.button}>
                <Button title={"Fetch IB Branch Details"}
                        onPress={clickMe}
                        color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
                        disabled={loading}/>
            </View>
            <ThemedText style={CommonStyles.displayText}>{message}</ThemedText>
        </ThemedView>
    );
}
