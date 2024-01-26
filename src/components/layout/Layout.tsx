//this file is to give layouts to the whole app, besides the home page.

import React, { ComponentType, ReactNode, useState } from "react";

import NavbarLayout from "./NavbarLayout";
import { Sidebar } from "./Sidebar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [expandSidebar, setExpandSidebar] = useState(false);

  return (
    <div className="  flex  h-screen flex-col  overflow-hidden bg-background text-foreground">
      <NavbarLayout
        expandSidebar={expandSidebar}
        setExpandSidebar={setExpandSidebar}
      />

      <div className={`flex flex-1 overflow-hidden  `}>
        <Sidebar expandSidebar={expandSidebar} />
        {/* make the child component (page) full height of the screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`
          bg-background-muted flex-1 overflow-y-auto     [&>div]:px-5 [&>div]:py-5 [&>div]:md:px-10`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
