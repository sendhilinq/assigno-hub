
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoginForm } from "../auth/LoginForm";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string) => void;
};

export const AuthModal = ({ isOpen, onClose, onSuccess }: AuthModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome back</DialogTitle>
          <DialogDescription>
            Please sign in to your account
          </DialogDescription>
        </DialogHeader>
        <LoginForm onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
};
