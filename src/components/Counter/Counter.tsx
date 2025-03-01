import { Button } from "../Button/Button";
import { useCounter } from "../../hooks/useCounter";
import { CiCircleCheck } from "react-icons/ci";
import { Box, Text, Flex, useToast } from "@chakra-ui/react";
import "./Counter.css";

export const Counter = () => {
    const { count, increment } = useCounter();
    const toast = useToast();

    const handleClick = () => {
        increment();
        toast({
            duration: 1000,
            isClosable: true,
            position: "bottom",
            render: () => {
                return (
                    <Box className="toast-container">
                        <CiCircleCheck className="toast-icon" />
                        <Flex flexDirection="column">
                            <Text className="toast-message">Incremented</Text>
                            <Text className="toast-message">
                                Counter is now {count + 1}
                            </Text>
                        </Flex>
                    </Box>
                );
            },
        });
    };

    return (
        <div className="container">
            <Text className="current-counter" fontSize="3xl">
                Current Counter: {count}
            </Text>
            <Button onClick={handleClick}>+1</Button>
        </div>
    );
};
