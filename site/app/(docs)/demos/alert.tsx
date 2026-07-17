import { Plane, Sun } from "lucide-react";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertDismiss,
  AlertHeader,
  AlertIcon,
  AlertTime,
  AlertTitle,
} from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert variant="warning">
        <AlertIcon>
          <Plane />
        </AlertIcon>
        <AlertContent>
          <AlertHeader>
            <AlertTitle>Gate change</AlertTitle>
            <AlertTime>2m ago</AlertTime>
          </AlertHeader>
          <AlertDescription>
            <span className="font-mono">TP1234</span> now departs from gate{" "}
            <span className="font-mono">B7</span>.
          </AlertDescription>
        </AlertContent>
        <AlertDismiss />
      </Alert>
      <Alert variant="info">
        <AlertIcon>
          <Sun />
        </AlertIcon>
        <AlertContent>
          <AlertHeader>
            <AlertTitle>Lisbon forecast</AlertTitle>
            <AlertTime>1h ago</AlertTime>
          </AlertHeader>
          <AlertDescription>
            Sunny, 24°C when you land tomorrow.
          </AlertDescription>
        </AlertContent>
        <AlertDismiss />
      </Alert>
    </div>
  );
}
