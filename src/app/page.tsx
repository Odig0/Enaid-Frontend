import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Enaid IA WhatsAppBot
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          A powerful WhatsApp bot that enables seamless financial transactions, wallet management, and purchases directly through WhatsApp.
        </Typography>
        <Link href="https://github.com/Odig0/Enaid" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={850}
          height={632}
          alt="Enaid Financial WhatsAppBot"
          src="/Logo_Enaid.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Key Features
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Seamless Transactions"
              description="Execute digital asset transfers and purchases with Coinbase AgentKit."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="WhatsApp Integration"
              description="Powered by Baileys for a reliable messaging experience."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Secure & Scalable"
              description="Built with TypeScript, Supabase, and Docker for maximum security and flexibility."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Simple Setup, No Custom Code Required
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Just install, scan the QR code with WhatsApp, and start managing transactions instantly.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Setup Enaid WhatsAppBot"
            src="/Logo_Enaid.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in Touch
          </Typography>
          <div>Explore the documentation or reach out for support.</div>
          <Link href="https://github.com/Odig0/Enaid" target="_blank">
            <Button size="tiny" variant="ghost">
              {`Learn More`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
