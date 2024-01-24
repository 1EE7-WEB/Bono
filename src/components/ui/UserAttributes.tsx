import React from "react";
import LoadingSpinner from "./Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

export function UserAvatar({ className }: AvatarProps) {
  const { user, isLoaded } = useUser();

  const loading = !isLoaded;
  function AvatarSkeleton() {
    return (
      <>
        <div
          className={`${className} flex   items-center justify-center  rounded-full`}
        >
          {" "}
          <LoadingSpinner />
        </div>
      </>
    );
  }

  const firstLetterUsername = user?.username
    ? user.username.substring(0, 2).toUpperCase()
    : "";

  return (
    <Avatar className="">
      {!loading ? (
        <>
          <AvatarImage src={user ? user.imageUrl : ""} />
          <AvatarFallback>{user ? firstLetterUsername : ""}</AvatarFallback>
        </>
      ) : (
        <AvatarSkeleton />
      )}
    </Avatar>
  );
}

//this is so i dont have to repeat that isloaded logic everytime I have to use the username
export function Username({ className }: { className?: string }) {
  const { user, isLoaded } = useUser();

  return isLoaded ? (
    <p className={className ? className : ""}>{user?.username}</p>
  ) : (
    <p className={className ? className : ""}>Loading.. </p>
  );
}

interface AvatarProps {
  className?: string;
}

export default Avatar;
