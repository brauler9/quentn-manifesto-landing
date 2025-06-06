
# Quentn Download Page - Drupal 7 Modul

Dieses Modul erstellt eine Download-Seite für den Quentn 13-Schritte-Report in Drupal 7.94.

## Installation

1. Kopieren Sie den gesamten `quentn_download` Ordner in das `sites/all/modules/` Verzeichnis Ihrer Drupal-Installation.

2. Erstellen Sie einen `images` Ordner im Modulverzeichnis und fügen Sie folgende Bilder hinzu:
   - `quentn-logo.png` (das Quentn Logo)
   - `report-cover.png` (das Report Cover)

3. Aktivieren Sie das Modul über die Admin-Oberfläche unter `admin/modules` oder via Drush:
   ```bash
   drush en quentn_download
   ```

4. Die Seite ist nun unter `/quentn-download` verfügbar.

## Funktionen

- **Responsive Design**: Funktioniert auf allen Geräten
- **AJAX Download**: Simuliert Download-Prozess mit Ladeanimation
- **Toast Benachrichtigungen**: Benutzerfreundliche Erfolgsmeldungen
- **SEO optimiert**: Meta-Tags und semantische HTML-Struktur
- **Quentn Branding**: Verwendet die exakten Quentn Farben und Helvetica Schriftart

## Anpassungen

### Bilder ersetzen
Ersetzen Sie die Bilder im `images/` Ordner des Moduls.

### Texte ändern
Bearbeiten Sie die Template-Datei `quentn-download-page.tpl.php`.

### Styling anpassen
Modifizieren Sie die `quentn_download.css` Datei.

### Download-Funktionalität
Erweitern Sie die `quentn_download_ajax()` Funktion in der `.module` Datei um echte Download-Logik.

## Technische Details

- **Drupal Version**: 7.94 kompatibel
- **Dependencies**: Keine zusätzlichen Module erforderlich
- **Browser Support**: Alle modernen Browser
- **Accessibility**: WCAG 2.1 konform

## URL Structure

- Hauptseite: `/quentn-download`
- AJAX Endpoint: `/quentn-download/ajax`

Das Modul registriert automatisch die Routen und Template-Dateien.
