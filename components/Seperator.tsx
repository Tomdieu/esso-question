import { View, Text } from 'react-native'
import React from 'react'
import { cn } from '@/lib/utils';

type Props = {
    className?:string;
}

const Seperator = ({className}: Props) => {
  return (
    <View className={cn("border mx-2 border-t-0 border-gray-400",className)}/>

  )
}

export default Seperator