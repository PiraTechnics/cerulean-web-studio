import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Tailwind,
} from "@react-email/components";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import * as React from "react";

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

export const ContactFormEmail = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white">
        <Container className="px-2">
          <Heading className="text-2xl italic">Cerulean Web Studio</Heading>
          <Heading className="text-xl">Contact Form Message</Heading>
          <Text className="font-sans font-semibold text-lg">
            From: {firstName} {lastName} ({email})
          </Text>
          <Text className="p-4 bg-slate-200">{message}</Text>
          {phoneNumber && (
            <Text className="flex items-center gap-4">
              <PhoneIcon width={24} /> {phoneNumber}
            </Text>
          )}
          <Text className="flex items-center gap-4">
            <EnvelopeIcon width={24} /> {email}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactFormEmail;

//note: Using the Tailwind package for React Email has known bug, causes "React unique key" warning. See open issue for details: https://github.com/resend/react-email/issues/1111
