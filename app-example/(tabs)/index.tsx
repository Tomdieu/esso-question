import { StyleSheet, View, Text } from 'react-native';
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/gluestack/checkbox';

import { Button ,ButtonText} from '@/components/ui/gluestack/button';
import { FormControl, FormControlLabel,FormControlError,FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlErrorIcon, FormControlErrorText } from '@/components/ui/gluestack/form-control';
import { VStack } from '@/components/ui/gluestack/vstack';
import { CheckIcon } from 'lucide-react-native';
import { useState } from 'react';
import { Box } from '@/components/ui/gluestack/box';
import { Input, InputField } from '@/components/ui/gluestack/input';
import { AlertCircleIcon } from '@/components/ui/gluestack/icon';


export default function HomeScreen() {
  const [values,setValues] = useState<string[]>([])
  return (
    <View className='p-4' style={{flex:1,padding:5}}>
    <Text className='font-bold'>Hello</Text>
    <Button variant='solid' className='bg-black p-2'><ButtonText className='text-white'>Click Me</ButtonText></Button>

    <Box className="w-full">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel className="mb-1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input className='w-full'>
              <InputField
                type="password"
                defaultValue="12345"
                placeholder="password"
                className='w-full'
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Must be at least 6 characters.
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon
                size={'xl'}
                as={AlertCircleIcon}
              />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
      
    <FormControl>
          <FormControlLabel>
            <FormControlLabelText>
              Sign up for newsletters
            </FormControlLabelText>
          </FormControlLabel>
          <CheckboxGroup value={values} className='my-2'>
            <VStack space="sm">
              <Checkbox size="sm" value="Mango">
                <CheckboxIndicator className='mr-2'>
                  <CheckboxIcon>
                    <CheckIcon />
                  </CheckboxIcon>
                </CheckboxIndicator>
                <CheckboxLabel>
                  Daily Bits
                </CheckboxLabel>
              </Checkbox>
              <Checkbox size="sm" value="Apple">
                <CheckboxIndicator className='mr-2'>
                  <CheckboxIcon>
                    <CheckIcon />
                  </CheckboxIcon>
                </CheckboxIndicator>
                <CheckboxLabel>
                  Event Updates
                </CheckboxLabel>
              </Checkbox>
              <Checkbox size="sm" value="Orange">
                <CheckboxIndicator className='mr-2'>
                  <CheckboxIcon>
                    <CheckIcon />
                  </CheckboxIcon>
                </CheckboxIndicator>
                <CheckboxLabel>
                  Sponsorship
                </CheckboxLabel>
              </Checkbox>
            </VStack>
          </CheckboxGroup>
          <FormControlHelper>
            <FormControlHelperText>
              Subscribe to newsletters for updates
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
      
  </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
