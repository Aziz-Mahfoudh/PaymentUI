import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  status: string;
  paymentId: string;
  visible: boolean;
}

export default function AlertPayment({ status, paymentId, visible }: Props) {
  const _status = status == "SUCCEED" ? "success" : "error";
  const _alertTitle = status == "SUCCEED" ? "Success!" : "Error!";
  const _successDescription =
    "Your payment has been executed successfully. Consider checking your account for more details";
  const _errorDescription =
    "There have been an issue while processing your payment. Please try again";
  const _alertDescription =
    status == "SUCCEED" ? _successDescription : _errorDescription;

  return visible ? (
    <Alert status={_status}>
      <AlertIcon />
      <Box>
        <AlertTitle>{_alertTitle}</AlertTitle>
        <AlertDescription>{_alertDescription}</AlertDescription>
      </Box>
    </Alert>
  ) : null;
}
