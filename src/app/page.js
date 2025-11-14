import CommitteesSection from "@/components/Committees";
import DocumentArchives from "@/components/DocumentArchives";
import LeadershipSection from "@/components/leader";
import MemberTestimonialSlider from "@/components/membertesti";
import Navbar from "@/components/navbar";
import MemberSlider from "@/components/ourmember";
import AboutSection from "@/components/samllabout";
import ImageSlider from "@/components/TopSlider";
import VideoGallerySlider from "@/components/videogallery";
import Image from "next/image";

export default function Home() {
  return (<>
  <ImageSlider/> 
  <AboutSection/>
  <MemberSlider/>
  <LeadershipSection/>
  <CommitteesSection/>
  <DocumentArchives/>
  <MemberTestimonialSlider/>
  <VideoGallerySlider/>
  </>
  );
}
