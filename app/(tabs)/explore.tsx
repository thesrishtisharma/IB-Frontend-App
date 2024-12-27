import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
    const listItems = [
        "Branch Address",
        "Contact Number",
        "Help Desk Email ID",
        "IFSC Code"
    ];
    const steps = [
        "Select your preferred 'Zone'",
        "Press button 'Fetch IB Branch Details'",
        "At the bottom of your screen you can see the information"
    ];
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Help</ThemedText>
      </ThemedView>
        <ThemedText>This app helps in checking the below details from Indian Bank based on the selected zone </ThemedText>
        <ThemedView style={{ padding: 20 }}>
            {listItems.map((item, index) => (
                <ThemedText key={index} style={{ marginBottom: 10 }}>
                    {index + 1}. {item}
                </ThemedText>
            ))}
        </ThemedView>
        <ThemedView>
            <ThemedText>
                Follow the below simple steps to get the information:
            </ThemedText>
        </ThemedView>
        <ThemedView style={{ padding: 20 }}>
            {steps.map((step, index) => (
                <ThemedText key={index} style={{ marginBottom: 10 }}>
                    {index + 1}. {step}
                </ThemedText>
            ))}
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
