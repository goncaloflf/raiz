import Image from "next/image";
import {
  Scissors,
  MapPin,
  Phone,
  Clock,
  Instagram,
  PhoneIcon as WhatsApp,
  Slice,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <SiteHeader />

      {/* Hero Section */}
      <header className="relative h-screen">
        <Image
          src="/photos/sala-1.jpeg"
          alt="Raiz Barber Studio Interior"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
          <p className="text-4xl italic mb-8 font-light tracking-wider">
            O teu estilo começa na Raiz!
          </p>
          <Link href="https://noona.pt/raizbarberstudio" target="_blank">
            <Button
              variant={"default"}
              className={
                "text-black border-white bg-white hover:bg-transparent hover:text-white"
              }
            >
              Reservar
            </Button>
          </Link>
        </div>
      </header>

      {/* About Us Section */}
      <section id="sobre" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Quem Somos</h2>
          <div className="prose prose-lg mx-auto">
            <h3 className="text-2xl font-semibold mt-12 mb-6">História</h3>
            <p className="text-lg leading-relaxed mb-8">
              A Raiz Barber Studio nasceu do sonho e dedicação de Rodrigo
              Mourão, após 7 anos de experiência em barbearias de excelência.
              Inspirados pelas tradições e costumes da zona saloia, criámos um
              espaço onde a autenticidade das nossas origens se junta à
              modernidade e ao estilo.
            </p>
            <h3 className="text-2xl font-semibold mt-12 mb-6">Missão</h3>
            <p className="text-lg leading-relaxed">
              Na Raiz, acreditamos que cada detalhe importa. Combinamos técnicas
              clássicas de barbearia com um toque contemporâneo, oferecendo uma
              experiência única e personalizada. Tal como as raízes sustentam o
              crescimento, queremos ser a base que apoia o estilo e a confiança
              de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-stone-100 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="flex">
                  {service.categories?.includes("HAIR") && (
                    <Scissors className="w-8 h-8 mb-6 text-stone-800" />
                  )}
                  {service.categories?.includes("BEARD") && (
                    <Slice className="w-8 h-8 mb-6 text-stone-800" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                <p className="text-stone-600 mb-4">{service.description}</p>
                <p className="text-xl font-bold text-stone-800">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Nossa Galeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/corte-1.jpeg"
                alt="Corte de Cabelo Moderno"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/sala-1.jpeg"
                alt="Interior da Barbearia"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/raiz-neon.jpeg"
                alt="Ambiente da Barbearia"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/merch-1.jpeg"
                alt="Área de Merchandise"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/merch-2.jpeg"
                alt="Entrada da Barbearia"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/photos/sala-3.jpeg"
                alt="Área de Espera"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-24 bg-stone-800 text-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Visite-nos</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-auto">
              <Link
                href="https://maps.app.goo.gl/G99Dqvx8VKNqpQFq6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-stone-300 transition-colors"
              >
                <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>Av. Primeiro de Novembro 38B, 2665-378 Milharado</span>
              </Link>
              <Link
                href="https://wa.me/00351914047328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-stone-300 transition-colors"
              >
                <WhatsApp className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>+351 914 047 328</span>
              </Link>
              <p className="flex items-center text-lg">
                <Clock className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>Seg-Sáb: 10:00 - 20:00</span>
              </p>
              <Link
                href="https://www.instagram.com/raizbstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-stone-300 transition-colors"
              >
                <Instagram className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>@raizbstudio</span>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-80 relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7235577453844!2d-9.210259523226734!3d38.94823447171331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed5827c2cbb59%3A0xd810270440a1b550!2sRaiz%20Barber%20Studio!5e0!3m2!1sen!2spt!4v1737676983415!5m2!1sen!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Raiz Barber Studio. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacidade"
              className="hover:text-stone-300 transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos"
              className="hover:text-stone-300 transition-colors"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    name: "Corte Simples",
    description: "Pente único, ou tesoura com lâmina.",
    price: "€10",
    categories: ["HAIR"],
  },
  {
    name: "Corte Tradicional",
    description: "Máquina e tesoura com lâmina.",
    price: "€12",
    categories: ["HAIR"],
  },
  {
    name: "Corte Personalizado",
    description: "Degradê, Taper, Mullet e Moicano.",
    price: "€14",
    categories: ["HAIR"],
  },
  {
    name: "Corte & Barba",
    description: "Pacote completo de cuidados para cabelo e barba.",
    price: "€18",
    categories: ["HAIR", "BEARD"],
  },
  {
    name: "Barba",
    description: "Corte e modelação básica da barba com navalha ou máquina.",
    price: "€8",
    categories: ["BEARD"],
  },
  {
    name: "Barba com Toalha Quente",
    description:
      "Corte e modelação da barba com tratamento de toalha quente para relaxamento e hidratação.",
    price: "€10",
    categories: ["BEARD"],
  },
  {
    name: "Pintura",
    description:
      "Coloração completa do cabelo com técnicas profissionais de tingimento.",
    price: "€15",
    categories: ["HAIR"],
  },
  {
    name: "Defriso",
    description:
      "Tratamento para suavizar e alisar cabelos crespos ou ondulados.",
    price: "€12",
    categories: ["HAIR"],
  },
  {
    name: "Platinado",
    description:
      "Descoloração e coloração completa para um tom loiro platinado intenso.",
    price: "Sob consulta",
    categories: ["HAIR"],
  },
];
