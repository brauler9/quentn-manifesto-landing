
<?php
/**
 * @file
 * Template for the Quentn download page.
 */
?>

<div class="quentn-download-page">
  <!-- Geometric Background Elements -->
  <div class="geometric-element-1"></div>
  <div class="geometric-element-2"></div>

  <div class="quentn-container">
    <!-- Header with Logo -->
    <header class="quentn-header">
      <img src="<?php echo base_path() . drupal_get_path('module', 'quentn_download'); ?>/images/quentn-logo.png" 
           alt="Quentn Logo" 
           class="quentn-logo" />
    </header>

    <div class="quentn-main-grid">
      <!-- Left Column - Content -->
      <div class="quentn-content">
        <!-- Pre-Headline -->
        <p class="quentn-pre-headline">
          Dein Download steht bereit
        </p>

        <!-- Main Headline -->
        <h1 class="quentn-headline">
          Alles hat geklappt, lade dir nun den 
          <span class="quentn-headline-highlight">13-Schritte-Report</span> 
          herunter!
        </h1>

        <!-- Download Button -->
        <div class="quentn-download-section">
          <button class="quentn-download-btn" type="button">
            <svg class="quentn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Jetzt kostenlos herunterladen
          </button>
        </div>
      </div>

      <!-- Right Column - Report Cover -->
      <div class="quentn-report-section">
        <div class="quentn-report-container">
          <img src="<?php echo base_path() . drupal_get_path('module', 'quentn_download'); ?>/images/report-cover.png" 
               alt="13 Schritte zu mehr Umsatz Report Cover" 
               class="quentn-report-image" />
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="quentn-content-section">
      <div class="quentn-content-text large">
        Was dich erwartet, ist mehr als ein einfaches E-Book, das nur dafür genutzt wurde, dich in unseren Verteiler zu ziehen und dir unsere Quentn.com-Software zu verkaufen.
      </div>
      
      <div class="quentn-content-text highlight">
        Den Link für ein Sonderangebot haben wir dir soeben per E-Mail gesendet ;-)
      </div>
      
      <div class="quentn-content-text">
        Du bekommst hier ein echtes Marketing- und Vertriebs-Manifest, das von Hand und mit Herz und Seele für alle verfasst wurde, die mehr verkaufen möchten.
      </div>
      
      <div class="quentn-content-text">
        Ich habe die besten Tipps, Tricks und Strategien zusammengefasst, die dich genau da abholen, wo du gerade bist. Du hast einen roten Faden, der dich Schritt für Schritt in einen besseren Marketer und auch Vertriebler verwandelt.
      </div>
      
      <div class="quentn-content-text">
        Egal, ob du Freelancer bist, der die ersten Kunden gewinnen möchte oder Teil eines Vertriebsteams aus 20 Mitarbeitern, das mehr aus herausholen möchte, dieser Leitfaden ist für dich gemacht!
      </div>
      
      <div class="quentn-content-text">
        Wir beginnen mit leichter Kost und arbeiten uns zu echt fortgeschrittenen Strategien vor, die in Zukunft den Unterschied ausmachen werden.
      </div>
      
      <div class="quentn-content-callout">
        <div class="quentn-callout-title">
          Bitte achte zudem unbedingt auf deine E-Mails!
        </div>
        <div class="quentn-content-text">
          In den nächsten 14 Tagen bekommst du ein echtes E-Mail-Marketing und CRM-Coaching mit funktionierenden und leicht umsetzbaren Strategien für mehr Leads und Kunden in deinem Business.
        </div>
      </div>
    </div>

    <!-- Call-to-Action Footer -->
    <div class="quentn-cta-footer">
      <div class="quentn-cta-box">
        <h3 class="quentn-cta-title">
          Bereit für mehr Kunden und Umsatz?
        </h3>
        <p class="quentn-cta-text">
          Lade dir jetzt den 13-Schritte-Report herunter und starte durch!
        </p>
        <button class="quentn-download-btn" type="button">
          <svg class="quentn-icon small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Gratis Download starten
        </button>
      </div>
    </div>
  </div>
</div>
