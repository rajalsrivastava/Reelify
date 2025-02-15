"use client";
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Home() {

  const [videos, setVideos] = useState<IVideo[]>([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
     const data = await apiClient.getVideos()
     setVideos(data)
      } catch (error) {
        console.error("Error fetching videos", error)
      }
    }
    fetchVideos()
  },[videos])

  return (
    <div>
      <h1>ChaiCode</h1>
    </div>
  );
}
