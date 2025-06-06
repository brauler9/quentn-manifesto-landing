
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Download gestartet!",
        description: "Dein 13-Schritte-Report wird heruntergeladen.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 font-helvetica">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-quentn-blue/10 transform rotate-45"></div>
        <div className="absolute top-1/4 -left-10 w-32 h-32 bg-quentn-orange/10 transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-quentn-dark-blue/10 transform -rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-quentn-blue/5 transform rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <header className="mb-12 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/e983df6a-30a8-4e3d-8a03-7d7f710c8eb2.png" 
              alt="Quentn Logo" 
              className="h-16 w-auto"
            />
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Pre-Headline */}
              <p className="text-quentn-blue text-lg font-medium uppercase tracking-wide">
                Dein Download steht bereit
              </p>

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-quentn-dark-blue leading-tight">
                Alles hat geklappt, lade dir nun den{" "}
                <span className="text-quentn-blue">13-Schritte-Report</span>{" "}
                herunter!
              </h1>

              {/* Download Button */}
              <div className="pt-4">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-quentn-orange hover:bg-quentn-orange/90 text-white text-lg px-8 py-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isDownloading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Wird heruntergeladen...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Download className="h-6 w-6" />
                      <span>Jetzt kostenlos herunterladen</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>

            {/* Right Column - Report Cover */}
            <div className="flex justify-center lg:justify-end animate-float">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9257bb84-533b-48eb-8bc8-6c8a9b65eaaa.png" 
                  alt="13 Schritte zu mehr Umsatz Report Cover" 
                  className="w-full max-w-md h-auto shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-quentn-blue/20 to-quentn-orange/20 rounded-lg blur-lg -z-10"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl text-quentn-dark-blue font-semibold">
                Was dich erwartet, ist mehr als ein einfaches E-Book, das nur dafür genutzt wurde, dich in unseren Verteiler zu ziehen und dir unsere Quentn.com-Software zu verkaufen.
              </p>
              
              <p className="text-quentn-blue font-medium">
                Den Link für ein Sonderangebot haben wir dir soeben per E-Mail gesendet ;-)
              </p>
              
              <p>
                Du bekommst hier ein echtes Marketing- und Vertriebs-Manifest, das von Hand und mit Herz und Seele für alle verfasst wurde, die mehr verkaufen möchten.
              </p>
              
              <p>
                Ich habe die besten Tipps, Tricks und Strategien zusammengefasst, die dich genau da abholen, wo du gerade bist. Du hast einen roten Faden, der dich Schritt für Schritt in einen besseren Marketer und auch Vertriebler verwandelt.
              </p>
              
              <p>
                Egal, ob du Freelancer bist, der die ersten Kunden gewinnen möchte oder Teil eines Vertriebsteams aus 20 Mitarbeitern, das mehr aus herausholen möchte, dieser Leitfaden ist für dich gemacht!
              </p>
              
              <p>
                Wir beginnen mit leichter Kost und arbeiten uns zu echt fortgeschrittenen Strategien vor, die in Zukunft den Unterschied ausmachen werden.
              </p>
              
              <div className="bg-quentn-blue/5 border-l-4 border-quentn-blue p-6 rounded-r-lg">
                <p className="font-semibold text-quentn-dark-blue mb-2">
                  Bitte achte zudem unbedingt auf deine E-Mails!
                </p>
                <p>
                  In den nächsten 14 Tagen bekommst du ein echtes E-Mail-Marketing und CRM-Coaching mit funktionierenden und leicht umsetzbaren Strategien für mehr Leads und Kunden in deinem Business.
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-Action Footer */}
          <div className="mt-12 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-quentn-dark-blue to-quentn-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Bereit für mehr Kunden und Umsatz?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Lade dir jetzt den 13-Schritte-Report herunter und starte durch!
              </p>
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-quentn-orange hover:bg-quentn-orange/90 text-white text-lg px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                {isDownloading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Download läuft...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Gratis Download starten</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
