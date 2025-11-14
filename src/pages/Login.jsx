import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Login({ isLoginDialogOpen, setIsLoginDialogOpen }) {
  return (
    <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
      <form>
        <DialogContent
          className="sm:max-w-[425px] bg-transparent/50 backdrop-blur-sm"
          overlayClassName="!bg-transparent/50 backdrop-blur-sm"
        >
          <div className="bg-white/95 rounded-lg p-6 shadow-lg backdrop-blur-md">
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Enter your credentials to access your account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  required
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsLoginDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#FF8A00] hover:bg-[#F65900] text-white"
                onClick={() => {
                  // Handle login logic here
                  setIsLoginDialogOpen(false);
                }}
                type="submit"
              >
                Login
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
