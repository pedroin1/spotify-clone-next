"use server";

import MainContent from "@/components/content";
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";

export default async function Home() {
  return (
    <main className="flex flex-col h-screen">
      <section className="flex flex-1">
        <SideBar />
        <MainContent />
      </section>
      <Footer />
    </main>
  );
}
