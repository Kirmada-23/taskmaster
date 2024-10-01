"use client";

import { useTasks } from "@/context/taskContext";
import useRedirect from "@/hooks/useUserRedirect";

export default function Home() {
  useRedirect("/login");

  const { tasks } = useTasks();

  return (
    <main className="m-6 h-full">
      <div>
        <h1 className="text-2xl font-bold">All Tasks</h1>
      </div>
    </main>
  );
}
