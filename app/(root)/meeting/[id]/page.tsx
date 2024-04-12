"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallByid";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setisSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader/>

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>   
      {/* // StreamCall provider ensures in which call we are in */}
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup setIsSetupComplete={setisSetupComplete}/> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;