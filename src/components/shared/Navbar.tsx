import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "../mode-toggle";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useSelector } from "react-redux";

// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { Link, NavLink } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  // const { totalQuantity, totalPrice } = useSelector((state: any) => state.cart);
  // const dispatch = useAppDispatch();

  // const user = useAppSelector(selectCurrentUser);

  return (
    <div className=" border-b">
      <section className="container py-6 mx-auto">
        <div className="w-full px-6">
          <nav className="justify-between hidden lg:flex">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">Nahiduzzaman</h1>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <a
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    })
                  )}
                  href="#"
                >
                  HOME
                </a>

                <a
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    })
                  )}
                  href="#"
                >
                  PROJECTS
                </a>
                <a
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    })
                  )}
                  href="#"
                >
                  BLOG
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button variant="outline" size="lg">
                Resume
              </Button>
              <Button variant="outline" size="lg">
                Log in
              </Button>
            </div>

            {/* <div className="flex items-center gap-2">
              {user ? (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative w-8 h-8 rounded-full"
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            shadcn
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div>
                  <NavLink to="/login">
                    <Button variant="outline" size="sm">
                      Log in
                    </Button>
                  </NavLink>
                </div>
              )}
            </div> */}
          </nav>

          {/* mobile view */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center">
                  <h1 className="text-lg font-semibold">Nahiduzzaman</h1>
                </div>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-6 mb-6">
                    <a href="#" className="font-semibold">
                      Home
                    </a>

                    <a href="#" className="font-semibold">
                      Projects
                    </a>
                    <a href="#" className="font-semibold">
                      Blog
                    </a>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button variant="outline">Resume</Button>
                    <Button variant="outline">Log in</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
