"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {

  const {user} = useUser();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    user&&CheckUser();
  }, [user]);

  const CheckUser= async() => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      imageUrl: user?.imageUrl
    });
  }

  return (
    <div>
      <h1>My Homepage</h1>
      <Button>Hello</Button>
    </div>
  );
}
