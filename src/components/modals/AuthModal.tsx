
import {
  Dialog,
  DialogContent,
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
        <DialogHeader className="bg-[#006666] p-4 rounded-t-lg">
          <img 
            src="/lovable-uploads/e30a25ae-c8ed-4837-9299-2995a9191a0c.png" 
            alt="School Logo" 
            className="mx-auto h-12"
          />
        </DialogHeader>
        <div className="px-6 py-4">
          <DialogTitle className="text-2xl font-semibold text-left">
            Sign in to account
          </DialogTitle>
          <LoginForm onSuccess={onSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
