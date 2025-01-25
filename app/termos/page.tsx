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

export default function Termos() {
  return (
    <div className="min-h-screen bg-stone-100">
      <SiteHeader />

      {/* About Us Section */}
      <section id="sobre" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Termos e Condições
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-sm">
              Última atualização: 25 de Janeiro de 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
              <p className="mb-4">
                Bem-vindo ao website da Raiz Barber Studio. Este site é
                disponibilizado como serviço informativo aos nossos clientes. Ao
                utilizar este site, concorda com estes termos e condições.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                2. Propriedade Intelectual
              </h2>
              <p className="mb-4">
                Todo o conteúdo deste website (textos, imagens, logótipos e
                design) é propriedade exclusiva da Raiz Barber Studio ou dos
                seus licenciadores, protegido pelas leis de propriedade
                intelectual de Portugal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                3. Isenção de Responsabilidade
              </h2>
              <p className="mb-4">Este website:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  É fornecido "tal como se encontra" sem garantias de qualquer
                  tipo
                </li>
                <li>Não guarda quaisquer dados de utilizadores</li>
                <li>Não utiliza cookies ou tecnologias de rastreio</li>
                <li>
                  Pode conter links externos cujo conteúdo não controlamos
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                4. Ligações a Terceiros
              </h2>
              <p className="mb-4">
                Quaisquer links para sites externos são fornecidos apenas para
                conveniência. Não nos responsabilizamos pelo conteúdo desses
                sites nem endossamos os seus conteúdos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Jurisdição</h2>
              <p className="mb-4">
                Estes termos são regidos pelas leis de Portugal. Qualquer
                litígio será resolvido nos tribunais da comarca de [Inserir
                Cidade], Portugal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                6. Alterações aos Termos
              </h2>
              <p className="mb-4">
                Reservamo-nos o direito de alterar estes termos a qualquer
                momento. As alterações entrarão em vigor imediatamente após a
                sua publicação neste site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contactos</h2>
              <p className="mb-4">
                Raiz Barber Studio
                <br />
                Av. Primeiro de Novembro 38B, 2665-378 Milharado
                <br />
                +351 914 047 328
              </p>
              <p className="text-sm text-gray-600">
                ©2025 Raiz Barber Studio. Todos os direitos reservados.
              </p>
            </section>
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
