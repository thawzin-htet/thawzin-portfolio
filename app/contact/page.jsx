"use client";

import React, { useRef } from 'react'; 
import emailjs from '@emailjs/browser'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef(); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        alert("Message sent successfully!");
        e.target.reset(); 
    }, (error) => {
        alert("Failed to send: " + error.text);
    });
  };

  return (
    <motion.section  >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
           
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Ready to take your project to the next level? Fill out the form below to start a conversation about how we can achieve your goals together.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" required />
                <Input name="lastname" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" type="text" placeholder="Phone" />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="z-[999] bg-[#27272c] border-white/10">
                  <SelectGroup>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." required />

              <Button type="submit" size="md" className="max-w-40">Send message</Button>
            </form>
          </div>

        </div>
      </div>
    </motion.section> 
  );
};

export default Contact;