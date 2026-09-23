# Quotation Extraction — Deenar Lift Company (Evidence Dataset)

Phase: M2.5 — Business Verification (quotation evidence intake, raw).
Status: Extraction complete. Dataset is RAW EVIDENCE ONLY; no pricing analysis has been performed.
Primary authority: source quotation files (copies in `C:\Users\DELL\Documents\Sajjad Naseem\Quotations\`; originals untouched).
Related: docs/business-truth.md (P1: real pricing calibration remains PENDING).

Scope: 61 quotation files (Q001–Q061). This document records facts exactly as printed in the source documents. It contains NO averages, price-per-floor, price-per-kg, ranges, trends, formulas, rankings, or recommendations. Missing information is recorded as "Not specified". Ambiguous information is recorded as "Unclear".

---

## 1. Extraction Methodology

1.  **Source location.** 61 quotation files in `C:\Users\DELL\Documents\Sajjad Naseem\Quotations\` (14 from "Ahmed Bhai", 26 from "DOCUMENTS", 21 from "SUNPO INDUSTRIES"; one duplicate filename renamed to `Lahore - Copy (SUNPO INDUSTRIES).docx`). Copies were created for extraction; originals retained and re-verified by SHA-256 hash (61/61 match).
2.  **Ordering / ID.** Files sorted alphabetically by filename; alphabetical order maps to IDs Q001–Q061 (shared inventory `quot-inventory.txt`).
3.  **Extraction of DOCX (49 files).** Read directly from the OOXML package (`word/document.xml`) via `System.IO.Compression.ZipFile`; XML tags stripped; paragraph text joined with newlines. Output written as UTF-8 text files.
4.  **Extraction of PDF (12 files).** PDFs contain text as hex glyph IDs with embedded ToUnicode CMaps (no plain text layer). A custom PowerShell V7 decoder was used: (a) locate content streams and ToUnicode CMaps in the PDF object graph; (b) zlib-inflate both; (c) build glyph→Unicode mapping from each CMap `beginbfchar`/`beginbfrange`; (d) parse `Tj`/`TJ` show-text operators, mapping each glyph hex value through the CMap; (e) join by text-positioning operators (`Td`/`TD`/`TJ` array separators) where recoverable.
5.  **Extracted text files.** Written to `C:\Users\DELL\AppData\Local\Temp\opencode\quot_text\NNN_<sanitized filename>.txt`, one per source file, used as the working source for this document.
6.  **Transcription rule.** All prices, capacities, floors/stops, speeds, brand names, and terminology are transcribed as printed, including spelling/terminology oddities found in the originals (e.g., "TFT LCD Display Cardboard", "Aebay Control", "Censor"). No correction or inference is applied.

---

## 2. Raw Evidence Rules

- Every field in section 3 comes from a single source document only.
- **"Not specified"** = the document gives no value for that field.
- **"Unclear"** = the document contains conflicting or ambiguous values (both figures are then stated).
- No summary number is derived. Where a document prints a total (e.g., lift + structure), that printed total is quoted verbatim; it is never recomputed here.
- Currencies are stated exactly as printed (PKR / Rs / USD CIF Karachi). No conversion is performed.
- Field captured for every entry: identification; lift/project; doors; machine/drive; mechanical; cabin; structure; electrical/safety; commercial; owner/customer responsibilities; after-sales; other.

---

## 3. Detailed Entries (Q001–Q061)

### Q001 — `Ashfaq s. Quote.docx`
- **Identification:** Document type "CONTRACT/AGREEMENT". Recipient: Mr Ashfaque Hussain. Date: 13 Feb 2023. Site: Plot No. 67-C, Lane-4, Al-Murtaza Commercial, Phase-8, DHA Karachi. Issuer: Excellent Elevator Engineering.
- **Lift / Project:** Passenger. Capacity 630 kg. Speed 1 m/s. 6 floors / 6 stops (G+1+2+3+4+Roof).
- **Doors:** SS frame + glass panel, locally made; track and seal imported China.
- **Machine / Drive:** Gearless machine 4.2 kW (imported China; "TorinDrive or MonaDrive"). Control panel: 7.5 kW Monarch inverter control system (imported China).
- **Mechanical:** Guide rail: main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 10 mm, W-roping (imported China). Cabin/counterweight materials as listed: SS sheet 22 gauge, MS sheet 20 gauge, yoke 4"×2" channel, 2"×2" angle, base sheet 12 gauge, counterweight main sheet 9 mm, concrete weight block, cabin and counterweight pulley 400 mm.
- **Cabin:** SS wall; edging design mirror steel; light; fan; digital LCD indicator; emergency bell; tiles. Approx size: width 4.5 ft × depth 3.5 ft × height 8 ft.
- **Structure:** Not specified (no separate structure quote in this document).
- **Electrical / Safety:** Door interlock protection; position-limit protection (over-travel); buffer spring; buzzer/alarm/intercom.
- **Commercial:** Lift cost Rs 3,700,000 "with Standard Cabin". Payment: 1st 40% advance (fixing guide rail and door); 2nd 20% (after fixing guide rail and door frame); 3rd 25% (after machine supply); 4th 12% (after cabin supply and mechanical work finished); 5th & final at finished work / handover.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power supply with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery completed within 60 days (excluding civil work time) after approval or first payment, whichever later.

### Q002 — `BILAL SB.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Glass Lift". Recipient: Mr Bilal sb. Date: 18/11/2025. Site: Karachi.
- **Lift / Project:** Passenger (glass). Capacity 630 kg, 7 persons. Speed 1 m/s. 4 floors / 4 stops (B+G+1+2).
- **Doors:** Automatic, 800 mm opening, imported seal and track (China). Panel: stainless steel grade 304 (Taiwan) with 6 mm tempered glass. Door drive: VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control panel: 7.5 kW Monarch control system (Original, imported China).
- **Mechanical:** Guide rail: main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Tempered glass 8 mm; stainless steel walls grade 304 Taiwan; lighting and fan; emergency bell; tiles; TFT LCD display COP.
- **Structure:** Main pillar 4"×4" pipe 4 mm (with 2"×4" supporting channel). Structure, lift and glass quoted as one combined amount.
- **Glass:** 8 mm tempered glass (cabin); 6 mm tempered glass (door panels).
- **Electrical / Safety:** Emergency brake; door interlock protection; position-limit protection; buffer spring; buzzer; ARD (automatic rescue device).
- **Commercial:** Total amount (structure + lift + glass) PKR 4,100,000 (Four Million One Hundred Thousand Only). Payment: 35% advance for structure/guides/doors; 15% machine; 15% cabin and ropes; 15% control and electrical; 20% glass work.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery completed within 60 days (excluding civil work) after approval or first payment, whichever later.

### Q003 — `Cargo Lift Quotation 2000kg.pdf`
- **Identification:** "Quotation for Supply and Installation of Cargo Lift". Recipient: Mr Tariq, M/s Sunpo Industries. Date: 21/11/2025. Site: KEPZ.
- **Lift / Project:** Cargo. Capacity 2000 kg. Speed 1 m/s. 6 floors / 6 stops (travel height 98 feet).
- **Doors:** M/S door book type (local fabricated), clear opening 6 ft.
- **Machine / Drive:** Geared machine 11 kW, 2000 kg load capacity (imported) BRAND NEW. Control panel: hedefsan card control system with imported inverter 15 kW.
- **Mechanical:** Guide rail: main 16 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Heavy duty MS sheet cabin with checker plate base.
- **Structure:** Not specified (structure not included in this quotation).
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer.
- **Commercial:** Lift cost PKR 5,500,000 (Five Million Five Hundred Thousand Only). Payment: 50% advance for (structure, guides and doors); 35% (machine, cabin and roping); 15% (control and electrical).
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery completed within 60 days (excluding civil work) after approval or first payment, whichever later.

### Q004 — `Complete Cargo Lift.pdf`
- **Identification:** "Quotation for Supply and Installation of Cargo Lift". Recipient: Mr Tariq / Mr Aamir, M/s Sunpo Industries. Date: 24/01/2026. PO: 005/2026. Site: KEPZ.
- **Lift / Project:** Cargo. Capacity 1600 kg. Speed 1 m/s. 6 floors / 6 stops (travel height 98 feet).
- **Doors:** M/S door book type (local fabricated), clear opening 6 ft.
- **Machine / Drive:** Geared or gearless machine, 1600 kg load capacity (imported) BRAND NEW. Control panel: Hedefsan or Monarch control system with imported inverter.
- **Mechanical:** Guide rail: main 16 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Cargo cabin, local made, wall stainless steel 304 grade; shaft size 8 ft × 8 ft; cabin size maximum to avail; cabin internal height 9 ft; base checker plate.
- **Structure:** Not specified (structure not included in this quotation).
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer; emergency brake.
- **Commercial:** Lift cost PKR 4,900,000 (Four Million Nine Hundred Thousand Only). Payment: 50% advance for (structure, guides and doors); 35% (machine, cabin and roping); 15% (control and electrical). Bank details printed: Title "EXCELLENT ELEVATOR ENGINEERING", A/C 9933 0103410838, IBAN PK MEZN 0099 3301 0341 0838, Meezan Bank Ltd.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery completed within 60 days (excluding civil work) after approval or first payment, whichever later.

### Q005 — `Complete Cargo.docx`
- **Identification / Content:** Identical quotation text to Q004 (`Complete Cargo Lift.pdf`), DOCX version. Recipient Mr Tariq / Mr Aamir, M/s Sunpo Industries. Date 24/01/2026. PO: 005/2026. Site KEPZ.
- **All fields:** As Q004 (cargo 1600 kg, 1 m/s, 6 floors / 6 stops, travel height 98 ft; M/S book type doors 6 ft clear; geared or gearless machine; lift cost PKR 4,900,000; 50/35/15 payment; 6 months free maintenance; 60 days delivery; bank details printed; owner civil/scaffolding/power duties).

### Q006 — `Complete Passenger Lift.pdf`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Tariq / Mr Aamir, M/s Sunpo Industries. Date: 24/01/2026. PO: 004/2026. Site: KEPZ.
- **Lift / Project:** Subject says "Passenger Lift"; the spec table's "Usage:" field is printed as "CARGO" (Unclear). Capacity 1000 kg. Speed 1 m/s. 6 floors / 6 stops (travel height 98 feet).
- **Doors:** Automatic center opening, 800 mm; imported seal and track China. Door panel: stainless steel grade-304 (locally made). Door drive: VVVF door operating system, imported, 800 mm with stainless steel door panel.
- **Machine / Drive:** Gearless machine 1000 kg load capacity (imported) BRAND NEW. Control panel: Monarch control system with imported inverter 11 kW.
- **Mechanical:** Guide rail: main 9 or 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Passenger cabin, local made, wall stainless steel 304 grade; shaft size 8 ft × 6 ft; cabin size maximum to avail; cabin internal height 9 ft; base tile.
- **Structure:** Not specified (structure not included in this quotation).
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer; emergency brake.
- **Commercial:** Lift cost PKR 4,500,000 (Four Million Five Hundred Thousand Only). Payment: 50% advance for (structure, guides and doors); 35% (machine, cabin and roping); 15% (control and electrical). Bank details: Excellent Elevator Engineering, Meezan Bank Ltd, A/C 9933 0103410838, IBAN PK MEZN 0099 3301 0341 0838.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery completed within 60 days (excluding civil work) after approval or first payment, whichever later.

### Q007 — `Complete Passenger.docx`
- **Identification / Content:** Identical quotation text to Q006 (`Complete Passenger Lift.pdf`), DOCX version. Recipient Mr Tariq / Mr Aamir, M/s Sunpo Industries. Date 24/01/2026. PO: 004/2026. Site KEPZ.
- **All fields:** As Q006 (usage field printed "CARGO" under a passenger-lift subject; 1000 kg, 1 m/s, 6/6; automatic center opening 800 mm; gearless machine; Monarch control 11 kW; lift cost PKR 4,500,000; 50/35/15; 6 months free maintenance; 60 days; bank details).

### Q008 — `Excellent_Elevator_Quotation.docx`
- **Identification:** "Quotation for Supply & Installation of Electrical Works for Passenger Lift". Recipient: Mr Salman Zia. Date: 29/09/2025. Site: Karachi. Issuer: Excellent Elevator (workshop E-1572, Street No. 16, Sector 10/E, Haryana Colony, Orangi Town, Karachi).
- **Lift / Project:** Electrical-works scope only for a passenger lift. Lift capacity / floors / stops / speed: Not specified in this document.
- **Doors:** Not specified (no lift/door specification; door-drive items listed below).
- **Machine / Drive:** Not specified (no lift machine item; scope is electrical).
- **Mechanical:** Not specified.
- **Cabin:** Not specified (cabin shoe included as trial/electrical item only).
- **Structure:** Not specified.
- **Electrical / Safety:** Items included (list): Door Drive; Control Panel (Monarch); ARD; Cabin Shoe; COP & LOP; Traveling Cable; Shaft Wiring; Photo Cell; Door Accessories & Lock; Limit Switches; Sensor; Buffer; Electrical Labor; Mechanical Labor.
- **Commercial:** Total cost Rs 1,150,000 (Rupees One Million One Hundred Fifty Thousand Only). Terms: 100% Advance.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power connection with breaker and single-phase lighting to machine room.
- **After-Sales:** Not specified.
- **Other:** No delivery / completion period stated.

### Q009 — `Fishri new WITH STRUCTURE.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Younus. Date: 10/07/2025; REVISED: 17/11/2025.
- **Lift / Project:** Passenger. Capacity 550 kg, 6 persons. Speed 1 m/s. 3 floors / 3 stops (G+1+2).
- **Doors:** Automatic, 800 mm opening, imported seal and track (China). Panel: stainless steel 800 mm (locally made). Door drive: VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control panel: 7.5 kW Monarch control system (7.5 kW inverter from China).
- **Mechanical:** Guide rail: main 9 or 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Not separately detailed in this document.
- **Structure:** New structure: PKR 600,000 — 4"×4" pipe 4 mm with supporting channel 4"×2".
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer.
- **Commercial:** Lift PKR 3,200,000; structure PKR 600,000; total amount PKR 3,800,000 (printed). Payment: 40% advance; 20% after fix guide and door (machine); 25% after fixed machine (cabin and ropes); 12% after fixed cabin and roping; 3% final on completion.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** 6-month free maintenance and service.
- **Other:** Delivery completed within 60 days (excluding civil work) after approval or receipt of payment.

### Q010 — `Fishri new.docx`
- **Identification:** Same recipient/scope as Q009. Recipient: Mr Younus. Date: 10/07/2025; REVISED: 27/01/2026.
- **Lift / Project:** Passenger. Capacity 550 kg, 6 persons. Speed 1 m/s. 3 floors / 3 stops (G+1+2).
- **Doors:** Automatic 800 mm opening, imported seal and track (China); stainless steel 800 mm panel (locally made); VVVF door drive (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control: 7.5 kW Monarch control system (7.5 kW inverter).
- **Mechanical:** Guide rail main 9 or 10 mm solid × 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Not separately detailed.
- **Structure:** Not included (separate covering of structure to be done by owner).
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** Lift cost PKR 3,200,000 (Rupees Three Million Two Hundred Thousand Only). Payment: 40/20/25/12/3%.
- **Owner / Customer Responsibilities:** Civil works; scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting to machine room; all covering of structure.
- **After-Sales:** 6-month free maintenance and service.
- **Other:** Delivery within 60 days (excluding civil work) after approval or payment.

### Q011 — `Fishri old.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Younus. Date: 10/07/2025. Site: Karachi.
- **Lift / Project:** Passenger. Capacity 550 kg, 6 persons. Speed 1 m/s. 3 floors / 3 stops (G+1+2).
- **Doors:** Automatic 800 mm opening, imported seal and track; stainless steel panel (locally made); VVVF door drive.
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control: 7.5 kW Monarch.
- **Mechanical:** Guide rail main 9 or 10 mm solid × 16 mm hollow. Roping: steel wire rope (hemp core).
- **Cabin:** Not separately detailed.
- **Structure:** Cost PKR 450,000. Old structure dismantling; (new) main framework 4"×2" MS channel 5 mm thickness; (old) support structure 4"×2" MS channel; covering with container sheet 24 gauge; structure color; estimated height approx 40 feet.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer.
- **Commercial:** Lift cost PKR 2,900,000; structure cost PKR 450,000 (printed as separate amounts). Payment: 40/20/25/12/3%.
- **Owner / Customer Responsibilities:** Civil works; scaffolding; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** 6-month free maintenance and service.
- **Other:** Delivery within 60 days (excluding civil work).

### Q012 — `Fishri Revised quote.pdf`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Younus. Date: 10/07/2025; REVISED: 27/01/2026.
- **Lift / Project:** Passenger. Capacity 550 kg, 6 persons. Speed 1 m/s. 3 floors / 3 stops (G+1+2).
- **Doors:** Automatic 800 mm opening, imported seal and track; stainless steel panel locally made; VVVF door drive imported China.
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control: 7.5 kW Monarch.
- **Mechanical:** Guide rail (main solid / cw hollow, imported China); roping steel wire hemp core — printed in the header table.
- **Cabin:** Not separately detailed.
- **Structure:** Not specified (structure covering by owner only).
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** Lift cost PKR 3,200,000. Payment in printed PKR amounts: Advance PKR 1,000,000; machine + cabin + roping PKR 1,500,000; control/inverter/wiring/safeties PKR 600,000; after completed work PKR 100,000.
- **Owner / Customer Responsibilities:** Civil works; scaffolding; 3-phase power with breaker and single-phase lighting; all covering of structure.
- **After-Sales:** 6-month free maintenance and service.
- **Other:** Delivery within 60 days (excluding civil work).

### Q013 — `g5 swing.docx`
- **Identification:** "Quotation for Supply, Installation, and Commissioning of 1000kg Cargo Lift". Recipient: Mr Asif Yaqoob sb. Date: 27/03/2026. Site: Karachi.
- **Lift / Project:** Cargo. Heading states 1000 kg; body states "Lift Capacity: 100 kg load capacity" (Unclear — two figures printed). Speed 1 m/s. 4 floors / 4 stops / 4 doors.
- **Doors:** Automatic door, stainless steel, 900 mm opening, seal and track imported.
- **Machine / Drive:** Gearless machine 6.4 kW, 1000 kg capacity (imported from China). Control panel: Monarch (imported China).
- **Mechanical:** Guide rails: main rail 9 mm solid (double); counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Stainless steel walls; mirror steel edging design; lighting; fan; digital LCD indicator; emergency bell; tiled flooring; intercom; size maximum to avail. Dimensions: 4.5 ft (width) × 7.5 ft (depth).
- **Structure:** Not specified. Note: "If channels and girders are required for the structure, they will be provided by the client."
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffers; alarm buzzer.
- **Commercial:** Total cost Rs 4,000,000 (Rupees Four Million Only). Payment: 1st 40% (advance); 2nd 25% (after guide rails and doors); 3rd 20% (after machine installation); 4th 13% (after mechanical work); 5th 2% (final upon handover).
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room; channels/girders for structure if required.
- **After-Sales:** 1-year free maintenance and service.
- **Other:** Delivery within 60 days (excluding civil work).

### Q014 — `Hill park 2.docx`
- **Identification:** "Supply and Installation of Semi-Import Passenger Lift". Recipient: Mr Abdul Malik. Date: 02/01/2025. Contract revised 04/04/2025 (ARD included). Site: Karachi.
- **Lift / Project:** Passenger. Capacity 450 kg. Speed 1 m/s. 4 floors / 4 stops / 4 doors (G+3).
- **Doors:** Hairline stainless steel automatic doors, 600 mm opening, imported seal and track (China). Door drive: VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW (brand new, imported China). Control panel: 7.5 kW Monarch (7.5 kW inverter).
- **Mechanical:** Guide rail main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Stainless steel walls; mirrored edging design; lighting and fan; emergency bell; tiles; LCD display COP.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD (included per revision line).
- **Commercial:** Lift cost Rs 2,100,000 (Rupees Two Million One Hundred Thousand Only). Payment: 40% advance (guide rails and doors); 20% machine (after guide and door work); 25% cabin (after machine delivered); 15% control panel and electrical (after cabin and roping). (No 5th tranche printed; printed sums are 40+20+25+15.)
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q015 — `hyd 2000kg.docx`
- **Identification:** "Quotation for Mechanical & Electrical Upgrade Work for Lifts". Client: EFS Facilities Services. Date: 31/07/2025. Project site: Lahore.
- **Lift / Project:** Upgrade of passenger lifts, G+3 and G+2. Number of lifts: 2. Capacity / floors / stops / speed: Not specified in this document.
- **Doors:** Not specified (door-drive/lock components listed in scope).
- **Machine / Drive:** Replacement of control panel; inverter (AEI 11-KW); door drive; speed governor — components only, no lift machine specification.
- **Mechanical:** Replacement components per lift: complete shaft wiring; traveling cable; reed safety switches; limit safety switches; ropes (Korean origin); pit buffer; car cabin shoes; counterweight shoes; maintenance box; all safety sensors.
- **Cabin:** Not specified (car cabin shoes listed).
- **Structure:** Not specified.
- **Electrical / Safety:** Control panel; inverter (AEI 11-KW); landing push buttons (G+3); call operating panel; photo cell (Weco); door lock; door weight; ARD; all safety sensors; complete shaft wiring; traveling cable.
- **Commercial:** Cost per lift PKR 2,200,000; number of lifts 2; total amount PKR 4,400,000 (printed). Payment: 90% advance; 10% upon final completion.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power connection with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** No delivery / completion period stated in this document.

### Q016 — `hyd 3000kg.docx`
- **Identification:** Heading printed "Quotation for Supply, Installation, and Commissioning of 2000kg Cargo Lift"; body states "Lift Capacity: 3000 kg load capacity" (Unclear — two figures printed). Recipient: Mr Ammad. Date: 07/01/2025. Site: Hyderabad.
- **Lift / Project:** Cargo. Capacity 3000 kg (body) / 2000 kg (heading). Speed: Not specified. 3 floors / 3 stops / 3 doors (G+2).
- **Doors:** Manual book type door.
- **Machine / Drive:** Geared machine 11 kW. Control panel: Hitech control system (imported China).
- **Mechanical:** Guide rails: main 16 mm solid; counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Stainless steel walls; mirror steel edging design; lighting; fan; digital LCD indicator; emergency bell; tiled flooring; intercom. Shaft size: 13 ft × 8 ft.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffers; alarm buzzer.
- **Commercial:** Total cost Rs 4,500,000 (Rupees Four Million Five Hundred Thousand Only). Payment: 40% advance; 25% after guide rails and doors; 20% after machine installation; 13% after mechanical work; 2% final upon handover.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** 1-year free maintenance and service.
- **Other:** Delivery within 60 days (excluding civil work).

### Q017 — `iqbal.docx`
- **Identification:** "Quotation for Passenger Lift". Recipient: Mr Shahrukh. Date: 29/01/2026. Site: Karachi.
- **Lift / Project:** Passenger. Capacity: Not specified. Speed: Not specified. Floors/stops: 5 floors / 6 stops (as printed).
- **Doors:** Automatic center opening; door panel hairline stainless steel; door drive VVVF (imported China).
- **Machine / Drive:** Control panel: Hedefsan control system with imported 7.5 kW inverter (China). Lift machine type: Not specified.
- **Mechanical:** Roping: steel wire rope (hemp core, imported China). Guide rail: Not specified.
- **Cabin:** Hairline stainless steel wall with edging design, TFT display, fan, light, tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer.
- **Commercial:** Total quotation amount PKR 1,950,000 (Rupees One Million Nine Hundred Fifty Thousand Only). Payment: 50% advance (cabin roping); 40% (control, wiring and door drives); 10% upon final completion.
- **Owner / Customer Responsibilities:** Not specified in this document.
- **After-Sales:** Not specified.
- **Other:** Delivery completed within 60 days (excluding civil work) after approval or first payment, whichever later.

### Q018 — `Irfan sb.docx`
- **Identification:** "Supply and Installation of Semi-Import Passenger Lift" (Quotation). Client: Mr Irfan sb. Date: 27/05/2025; revised 11/02/2026. Site: Gulistan-e-Johar, Karachi.
- **Lift / Project:** Passenger. Capacity 630 kg, 7 persons. Speed 1 m/s. Travel height 70 ft approx. 7 floors / 7 stops (G+6).
- **Doors:** Hairline stainless steel panel (locally made, imported standard); seal/track 700 mm center opening imported China (NBOL Brand); door drive VVVF imported China (NBOL Brand).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg capacity (imported China). Control panel: 7.5 kW Monarch inverter control system (imported China).
- **Mechanical:** Guide rail: main 9 or 10 mm solid; counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 10 mm, W-roping (imported).
- **Cabin:** Car finish rear wall: edging design; side walls: hairline stainless steel; lights, fan, digital TFT LCD display, LCD emergency bell, false ceiling, tiles.
- **Structure:** Not specified. Note: "If the shaft is open, the client will provide a dividing channel for separation."
- **Electrical / Safety:** Door interlock protection; position-limits protection; buffer; buzzer; automatic rescue device (ARD); additional security card swipe system.
- **Commercial:** Lift cost PKR 3,150,000 (Rupees Three Million One Hundred Fifty Thousand Only). Payment: 40% advance (guide rail and door); 20% machine (after guide and door work); 20% cabin (after fixed machine); 13% control and electrical (after cabin and roping); 2% final upon handover.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room; dividing channel if shaft open.
- **After-Sales:** Free maintenance & service 1 year after installation.
- **Other:** Installation time 70 days (excluding civil work).

### Q019 — `kh Iqbal.pdf`
- **Identification:** "Quotation for Passenger Glass Lift". Recipient: Mr Imran. Date: 26/06/2025. Site: Karachi. Issuer: Excellent Elevator (contact 0313 0222389).
- **Lift / Project:** Passenger (glass). Capacity 1000 kg, 10 persons. Speed 1 m/s. 3 floors / 3 stops (B+G+1).
- **Doors:** Automatic 800 mm opening, imported seal and track (China); panel stainless steel 304 Taiwan with 6 mm tempered glass; door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 6.2 kW, 1000 kg (imported China). Control: 7.5 kW Monarch (7.5 kW inverter).
- **Mechanical:** Guide rail main 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Not specified.
- **Structure:** Not specified.
- **Glass:** 6 mm tempered glass (door panels).
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** Total quotation amount PKR 4,300,000. Payment: 40% advance; 20% after fix guide and door; 20% after fixed machine; 15% after fixed cabin; 5% upon final completion.
- **Owner / Customer Responsibilities:** Not specified in this document.
- **After-Sales:** Not specified.
- **Other:** Delivery within 60 days (excluding civil work).

### Q020 — `Lahore - Copy (SUNPO INDUSTRIES).docx`
- **Identification:** "Supply and Installation of Imported Lift". Client: Sunpo Industries. Date: 28/08/2025. Project site: EPZA. Signed: Khalid Hayat.
- **Lift / Project:** Two imported lifts (brand Sigma Shanghai). (1) Passenger lift 1000 kg; (2) cargo lift 1600 kg. Both speed 1 m/s. 6 floors / 6 stops (G+5).
- **Doors:** Passenger: automatic doors 800 mm opening; cargo: automatic doors 1100 mm opening. Panels stainless steel 304 Taiwan. Door drive VVVF.
- **Machine / Drive:** Passenger: gearless machine 1000 kg; control 7.5 kW Monarch (7.5 kW inverter). Cargo: gearless machine 1600 kg; control 11 kW Monarch (7.5 kW inverter; printed). Both roping: steel wire rope (hemp core, imported China).
- **Mechanical:** Passenger guide rail main 10 mm solid × 16 mm hollow; cargo main 16 mm solid × 16 mm hollow (imported China).
- **Cabin:** Passenger: stainless steel walls, mirrored edging design, lighting and fan, emergency bell, tiles, TFT LCD display COP. Cargo: stainless steel walls, mirrored edging, lighting and fan, emergency bell, checker plate, TFT LCD display COP.
- **Structure:** Not specified in this document.
- **Electrical / Safety:** Door interlock protection; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** Lift amounts (USD CIF Karachi): 1000 kg USD 16,000; 1600 kg USD 19,000; total USD 35,000 (printed). Installation and commissioning (PKR): 1000 kg PKR 1,800,000; 1600 kg PKR 2,000,000; total PKR 3,800,000 (printed). Lift payment schedule: 70% advance; 30% before delivery. (Installation payment schedule: Not specified.)
- **Owner / Customer Responsibilities:** Not specified in this document.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery completed within 90 days (excluding civil work).

### Q021 — `Lahore - Copy.docx`
- **Identification:** "Supply and Installation of Semi-Import Passenger Glass Lift". Client: EFS Facilities Services. Date: 31/07/2025. Project site: Lahore.
- **Lift / Project:** Passenger (glass). Capacity 630 kg, 8 persons. Speed 1 m/s. 3 floors / 3 stops (G+2) and 4 floors / 4 stops (G+3) — two lifts quoted.
- **Doors:** Automatic 800 mm opening, imported seal and track (China); panel stainless steel 304 Taiwan; door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control: 7.5 kW Monarch (7.5 kW inverter).
- **Mechanical:** Guide rail main 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Stainless steel walls; mirrored edging design; lighting and fan; emergency bell; tiles; TFT LCD display COP.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** G+3 lift cost PKR 4,300,000; G+2 lift cost PKR 4,000,000 (printed as separate amounts). Payment: 40% advance; 20% after fix guide and door; 20% after fixed machine; 15% after fixed cabin; 5% final.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q022 — `Lahore.docx`
- **Identification / Content:** Identical quotation text to Q021 (`Lahore - Copy.docx`), same date/spec/pricing. Client EFS Facilities Services, 31/07/2025, Lahore; two passenger glass lifts 630 kg; G+3 PKR 4,300,000 and G+2 PKR 4,000,000; 40/20/20/15/5 payment; 6 months free maintenance; 60-day delivery.

### Q023 — `LIFT STRUCTURE Bilal sb.docx`
- **Identification:** "Structure Quotation". Recipient: Mr Bilal sb. Date: 13/10/2025. Site: Karachi.
- **Lift / Project:** Structure-only quotation (lift type not specified).
- **Structure:** Main pillar framework 4"×4" MS pipe 4 mm; support structure 4"×2" MS channel; estimated height approx 50 feet.
- **Commercial:** Structure cost PKR 700,000 (Rupees Seven Hundred Thousand Only). Payment: 100% advance.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; single-phase supply for working.
- **All other fields:** Not specified.
- **After-Sales:** Not specified.

### Q024 — `LIFT STRUCTURE.docx`
- **Identification:** "Structure Quotation". Recipient: Mr Saleh Muhammad, M/s SAK Timber. Date: 29/09/2025. Site: Karachi.
- **Lift / Project:** Structure-only quotation (lift type not specified).
- **Structure:** Main pillar framework 4"×2" MS channel (double for making pipe); support structure 4"×2" MS channel; estimated height approx 80 feet.
- **Commercial:** Structure cost PKR 1,150,000 (Rupees One Million One Hundred Fifty Thousand Only). Payment: 100% advance.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; single-phase supply for working.
- **All other fields:** Not specified.
- **After-Sales:** Not specified.

### Q025 — `malir.docx`
- **Identification:** "Quotation for Passenger Lift". Client: Naveed & Co. Date: 09/05/2026. Site: Karachi.
- **Lift / Project:** Passenger. Capacity: Not specified. Speed: Not specified. 5 floors / 5 stops.
- **Doors:** Automatic center opening, 1000 opening (as printed); panel hairline stainless steel with glass; door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 1600 kg, brand new GTW10X. Control panel: Monarch control system 11-kW Original (China).
- **Mechanical:** Roping: steel wire rope (hemp core, imported China). Guide rail: Not specified.
- **Cabin:** Hairline stainless steel wall with edging design, TFT display, fan, light, tiles. Shaft size 8 ft × 8 ft; cabin size approx 6.5 ft × 6.5 ft.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer.
- **Commercial:** Total PKR 3,550,000 (Rupees Three Million Five Hundred Fifty Thousand Only). Payment: 40% advance (guide and door); 20% cabin; 20% machine; 17% control and electrical; 3% after finished.
- **Owner / Customer Responsibilities:** Not specified in this document.
- **After-Sales:** Not specified.
- **Other:** Delivery within 60 days (excluding civil work).

### Q026 — `Mushtaq bhai.docx`
- **Identification:** "Quotation". Recipient: Mr Mushtaq bhai. Date: 30-May-2023. Site: Karachi.
- **Lift / Project:** Passenger. Capacity 450 kg, 5 persons. Speed 1 m/s. 1 floor / 1 stop (G+1; approximately height 20 ft).
- **Doors:** Swing door, 800 mm opening.
- **Machine / Drive:** Geared machine 5.5 kW, imported-reconditioned. Control panel: Hedefsan, or Hi-Tech card control with 7.5 kW imported inverter.
- **Mechanical:** Guide rail: main 9 mm solid × counterweight 16 mm hollow. Roping: steel wire rope (hemp core) 10 mm (imported China).
- **Cabin:** Car stainless steel wall; edging design mirror steel; light; fan; digital indicator; emergency bell; tiles; cabin size approx (value not printed in extracted text).
- **Structure:** Structure cost printed: PKR 400,000 (100% advance payment).
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer/alarm.
- **Commercial:** Lift cost Rs 2,250,000 per unit; structure cost Rs 400,000. Payment: 1st 60% advance; 2nd 25% for cabin; 3rd 10% after fixed guides, doors, machine, cabin; 4th final after finished work and at handover.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power supply with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work time) after approval or first payment, whichever later.

### Q027 — `Naveed Anjum.docx`
- **Identification:** "Supply and Installation of Semi-Imported Passenger Lift" (Quotation). Recipient: Mr Naveed Anjum sb. Date: 30/05/2024. DHA Karachi.
- **Lift / Project:** Passenger. Capacity 630 kg. Speed 1 m/s. 5 floors / 5 stops (G+4).
- **Doors:** Door panel hairline stainless steel 800 mm (304 Taiwan); door track 800 mm center opening imported China (NBOL Brand); door drive VVVF imported China (NBOL Brand).
- **Machine / Drive:** Gearless machine 4.2 kW (imported China). Control panel: Monarch control system (imported China, original).
- **Mechanical:** Guide rail main 9 or 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 10 mm (imported China).
- **Cabin:** Stainless steel wall; edging design mirror sheet; light; fan; digital TFT LCD display; LCD display landing push button; emergency bell; false ceiling; tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position limits; buffer; buzzer.
- **Commercial:** Lift cost PKR 2,400,000 per unit; discount amount PKR 225,000; after-discount lift amount PKR 2,175,000; branch amount PKR 30,000; total amount PKR 2,205,000 (printed). Payment: 1st PKR 750,000 (guide and doors); 2nd 25% (machine); 3rd 20% (cabin); 4th 13% (electrical); 5th 2% (final at handover).
- **Owner / Customer Responsibilities:** Civil works (cutting, waterproofing, machine room hole core cutting); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q028 — `NAVEED BHAI.docx`
- **Identification:** "Supply and Installation of Semi-Import Passenger Glass Lift". Recipient: Mr Naveed Anjum. Date: 09/10/2025. Site: Karachi.
- **Lift / Project:** Passenger (glass). Capacity 1000 kg. Speed 1 m/s. 6 floors / 6 stops / 6 doors (G+4+Roof).
- **Doors:** Automatic doors 800 mm opening with imported seal and track (China); panel stainless steel 304 Taiwan with 6 mm tempered glass; door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 6.2 kW (brand new, imported China). Control panel: 7.5 kW Monarch control system (7.5 kW inverter).
- **Mechanical:** Guide rail main 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Tempered glass door 6 mm; stainless steel walls; mirrored edging design; lighting and fan; emergency bell; tiles; TFT LCD display COP.
- **Structure:** Not specified.
- **Glass:** 6 mm tempered glass (cabin door panels).
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer; ARD.
- **Commercial:** Lift cost Rs 3,550,000 (with locally made cabin); Rs 4,600,000 (with imported cabin). Payment: 40% advance (guide rails and doors); 20% machine; 25% cabin; 12% control panel/electrical; 3% after completed work.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q029 — `P.O  01 REVISED QUOTE.pdf`
- **Identification:** "REVISED #01, Quotation for Supply and Installation of Cargo Lift". Recipient: Mr Tariq. Date: 21/11/2025. PO#001/2025. M/s Sunpo Industries. Site: KEPZ.
- **Lift / Project:** Cargo. Capacity 2000 kg. Speed 1 m/s. 6 floors / 6 stops (travel height 98 feet).
- **Doors:** M/S door book type (local fabricated), clear opening 6 ft.
- **Machine / Drive:** Geared machine 11 kW, 2000 kg load capacity (imported) BRAND NEW. Control panel: hedefsan card control system with imported inverter 15 kW.
- **Mechanical:** Guide rail main 16 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Heavy duty MS sheet cabin with checker plate base.
- **Structure:** Structure cost PKR 2,800,000. Structure specifications: overall height 98 ft × depth 7 ft × width 9 ft, designed for 2000 kg; main vertical channels 6"×3" mild steel 5 mm; horizontal supporting channels 4"×2" mild steel 5 mm; cross supporting angles 2"×2" mild steel 3 mm; heavy-duty MS, fully welded and aligned; anti-rust primer coating included.
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer.
- **Commercial:** Lift cost PKR 5,500,000; lift discount up to 10% PKR 500,000; structure cost PKR 2,800,000; total amount 7,800,000 (Rupees Seven Million Eight Hundred Thousand Only) (printed). Lift payment: 50% advance (structure, guides and doors); 35% (machine, cabin and roping); 15% (control and electrical). Structure payment: 100% advance.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** Free maintenance and service 6 months after installation.
- **Other:** Delivery within 90 days (excluding civil work).

### Q030 — `P.O 01 QUOTATION.docx`
- **Identification / Content:** Identical quotation text to Q029 (`P.O  01 REVISED QUOTE.pdf`), DOCX version. Cargo 2000 kg, 1 m/s, 6/6, travel height 98 ft; geared 11 kW machine; lift PKR 5,500,000, discount PKR 500,000, structure PKR 2,800,000, total PKR 7,800,000; 50/35/15 lift + 100% structure; 90-day delivery; 6 months free maintenance; structure spec as Q029.

### Q031 — `P.O 02 QUOTATION.pdf`
- **Identification:** "Quotation for Supply Local Cabin and Doors for Cargo Lift". Recipient: Mr Tariq. Date: 26/11/2025. P0# 002/2025. M/s Sunpo Industries. Site: KEPZ. Partially extracted (PDF lower portion garbled; pricing figures present).
- **Lift / Project:** Local made door and cabin for cargo 1600 kg lift; plus installation/commissioning of complete lifts.
- **Doors:** Local made MS door book type, 14 gauge chokhat, 16 gauge pipe, 18-gauge MS sheet, powder coated, size width opening 7.5 ft × height 7.5 ft, with lock and accessories. Qty 6; PKR 85,000 each; total PKR 510,000.
- **Cabin:** Local made cabin wall — stainless steel 304 grade; shaft size 8 ft × 8 ft; cabin size maximum to avail; cabin internal height 9 ft; base checker plate. Qty 1; PKR 1,500,000.
- **Commercial (doors + cabin):** Total price PKR 2,010,000. Terms: 100% (advance payment).
- **Installation & commissioning:** Item 1 FHSP 1600 kg -1.0 m/s - 6/6/6 MR cargo lift, 1600 kg, 06 stops, 1.0 m/s simplex — PKR 1,200,000. Item 2 FHSP 1000 kg -1.0 m/s - 6/6/6 MR passenger lift, 1000 kg, 06 stops, 1.0 m/s simplex — PKR 1,000,000. Total PKR 2,200,000. Terms: 1st 60% advance; 2nd 30% (after guide rails and doors); 3rd 10% (final at handover).
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** 12 months free maintenance and service after installation (printed in PDF tail).
- **Other:** Structure / glass: Not specified.

### Q032 — `P.O 02.docx`
- **Identification:** "REVISED 22/01/2026 Quotation for Supply Local Cabin and Doors for Cargo Lift". Recipient: Mr Tariq. Date: 14/01/2026. P0# 002/2025. M/s Sunpo Industries. Site: KEPZ. (Revised edition of Q031.)
- **Doors:** Same local MS door spec as Q031 (qty 6; PKR 85,000 each; PKR 510,000).
- **Cabin:** Cargo cabin local made, SS 304, shaft 8 ft × 8 ft, internal height 9 ft, checker plate base; PKR 1,500,000.
- **Commercial (doors + cabin):** Subtotal PKR 2,010,000; up to 10% discount PKR 210,000; total after discount PKR 1,800,000. Terms: 100% advance.
- **Installation & commissioning:** FHSP 1600 kg -1.0 m/s - 6/6/6 MR cargo lift, 1600 kg, 06 stops, 1.0 m/s simplex — PKR 1,200,000. Total PKR 1,200,000. Terms: 60% / 30% / 10%.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** 12 months free maintenance and service after installation.
- **Other:** Structure / glass: Not specified.

### Q033 — `P.O 03.docx`
- **Identification:** "REVISED 22/01/2026 Quotation for Supply Local Cabin and Doors for Passenger Lift". Recipient: Mr Tariq. Date: 14/01/2026. P0# 003/2025. M/s Sunpo Industries. Site: KEPZ.
- **Doors:** Local made stainless steel door, automatic seal and track imported, door panel SS-304 locally made, opening 800 mm, height 9 feet. Qty 6; PKR 120,000 each; total PKR 720,000.
- **Door drive:** Door operating panel (door drive) imported 800 mm with stainless steel door panel — PKR 200,000.
- **Cabin:** Passenger cabin local made, wall SS 304 grade; shaft size 8 ft × 6 ft; cabin size maximum to avail; internal height 9 ft; base tile. PKR 1,300,000.
- **Commercial (doors + drive + cabin):** Subtotal PKR 2,220,000; up to 10% discount PKR 220,000; total after discount PKR 2,000,000. Terms: 100% advance.
- **Installation & commissioning:** FHSP 1000 kg -1.0 m/s - 6/6/6 MR passenger lift, 1000 kg, 06 stops, 1.0 m/s simplex — PKR 1,000,000. Total PKR 1,000,000. Terms: 60% / 30% / 10%.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** 12 months free maintenance and service after installation.
- **Other:** Structure / glass: Not specified.

### Q034 — `P.O 04 Hoist lift.docx`
- **Identification:** "Quotation for Supply and Installation of Hoist Lift". Recipient: Mr Aamir Iqbal. Date: 22/01/2026. PO#004/2026. M/s Sunpo Industries. Site: KEPZ.
- **Lift / Project:** Hoist lift. Capacity 2000 kg. Speed: Not specified. 6 floors / 6 stops (travel height 98 feet).
- **Doors:** No doors included.
- **Machine / Drive:** Hoist machine. Control panel: relay control panel.
- **Mechanical:** Guide rail: 16 mm solid (imported China). Roping: rope directly wound on a drum (drum hoist); motor winds/unwinds rope.
- **Cabin:** Heavy duty MS cabin base with checker plate base.
- **Structure:** Structure cost PKR 1,800,000. Structure: height 98 ft × depth 7 ft × width 9 ft; main vertical channels 4"×4" square pipe 5 mm; horizontal supporting channels 4"×2" mild steel 5 mm; cross angles 2"×2" mild steel 3 mm.
- **Electrical / Safety:** Position-limit protection; buffer spring; buzzer. (No door interlock listed — consistent with no doors.)
- **Commercial:** Hoist cost PKR 2,900,000; structure cost PKR 1,800,000; total PKR 4,700,000 (Rupees Four Million Seven Hundred Thousand Only). Payment: 80% advance for (structure, guides and doors); 20% (control and electrical). Structure payment: 100% advance.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery within 45 days (excluding civil work).

### Q035 — `pharma.docx`
- **Identification:** "Quotation for Elevator Modification Work". Recipient: Mr Nadeem Zia, M/s AGP Pharma. Date: 26/06/2025. Site: Karachi. Sincerely M. Ahmed Sharif, M/s Excellent Elevator.
- **Scope of work (as printed):** Replacement of existing door panels with glass doors; replacement of elevator machine with gearless technology machine (1000 kg load capacity); replacement of roping system; replacement of control system with Monarch control system; replacement of landing buttons; upgrade of car cabin interior.
- **Lift / Project:** Modification of an existing elevator. Capacity (machine) 1000 kg. Floors / stops / speed: Not specified.
- **Commercial:** Total quotation amount PKR 4,000,000 (Rupees Four Million Only). Payment: 50% advance; 30% after replacement of machine and ropes; 15% after replacement of door panels; 5% upon final completion.
- **All other fields:** Not specified.
- **After-Sales:** Not specified.
- **Other:** No delivery period stated.

### Q036 — `Phs-8 Tabish sb.docx`
- **Identification:** "Supply and Installation of Semi-Imported Passenger Lift" (Quotation). Recipient: Mr Tabish sb. Date: 20/05/2024. Phase-8, DHA Karachi.
- **Lift / Project:** Passenger. Capacity 1000 kg. Speed 1 m/s. 7 floors / 7 stops (B+G+4+Roof).
- **Doors:** Door panel 304-hairline stainless steel with glass, 1000 mm opening (locally made); door track 1000 mm center opening imported China (NBOL Brand); door drive VVVF imported China (NBOL Brand).
- **Machine / Drive:** Gearless machine 6.4 kW, 1000 kg, TorinDrive (imported China). Control panel: Monarch control system (imported China).
- **Mechanical:** Guide rail main 16 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 12 mm (imported China).
- **Cabin:** Stainless steel wall; edging design mirror sheet; light; fan; digital TFT LCD display; LCD display landing push button; emergency bell; false ceiling; tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** ARD; door interlock protection; position limits protection; buffer spring; buzzer.
- **Commercial:** Lift cost per unit Rs 3,400,000 (without any kind of tax). Payment: 30% advance (guide rail and door); 20% machine; 25% cabin; 20% electrical (after mechanical finished); 5% final at handover.
- **Owner / Customer Responsibilities:** Civil works (cutting, waterproofing, machine room hole core cutting); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room. Additional remarks: steel girder to be provided by customer; additional cabin parts provided by client with labor paid by vendor.
- **After-Sales:** Free maintenance & service 6 months; after 6 months service charges PKR 5,000 per month.
- **Other:** Delivery within 60 days (excluding civil work).

### Q037 — `Qamar  Mansha - 2.docx`
- **Identification:** "Contract". Recipient: Mr Qamar Mansha. Date: 06/01/2025. Site: DHA, Karachi.
- **Lift / Project:** Passenger. Capacity 1000 kg, speed 1 m/s. 6 floors / 6 stops (Ground + 5).
- **Doors:** Automatic doors, 800 mm opening, track and seal imported China NOBL Brand; door opening 800 mm (2 feet 7 inches); panel hairline stainless steel (304 grade); door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 1000 kg capacity, Torindrive (imported China). Control panel: 7.5 kW Monarch control system (imported China).
- **Mechanical:** Guide rails: main 9 mm or 10 mm solid; counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Locally made hairline stainless steel (304 grade) with counterweight frame and blocks; light, fan, tiles. Cabin size approx 6 ft width × 4 ft depth × 7 ft height. COP/LOP: TFT display and LCD display LOP.
- **Structure:** Not specified. Note: "If the shaft size is large or open, the client will be responsible to provide dividing channels or girders for support."
- **Electrical / Safety:** Door interlock protection; emergency brake / speed governor; position-limit protection; buffers; alarm buzzer; ARD.
- **Commercial:** Lift cost PKR 3,100,000 (excluding taxes); PKR 150,000 (generator + fuel + branch; single-phase generator for working purpose only). Payment: 30% advance; 35% (cabin); 20% (after machine installation); 13% (after mechanical work); 2% (final upon handover).
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); supply 3-phase power connection with breaker and single-phase lighting to machine room; dividing channels/girders if shaft large/open.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q038 — `Qamar  Mansha.docx`
- **Identification / Content:** Identical contract text to Q037 (`Qamar  Mansha - 2.docx`). Recipient Mr Qamar Mansha, 06/01/2025, DHA Karachi. Passenger 1000 kg, 1 m/s, 6/6 (G+5); PKR 3,100,000 + PKR 150,000 generator; 30/35/20/13/2 payment; 6 months free maintenance; 60-day delivery.

### Q039 — `Qamar Mansha 2.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Qamar Mansha. Date: 09/06/2025. Site: DHA.
- **Lift / Project:** Passenger. Capacity 630 kg, 6 persons. Speed 1 m/s. 6 floors / 6 stops (G+4+Roof).
- **Doors:** Automatic doors opening (700/800 mm), imported seal and track (China); panel stainless steel grade 304 (Taiwan); door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg, Torin Drive (imported China). Control: 7.5 kW Monarch (original, imported China).
- **Mechanical:** Guide rail main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Stainless steel walls grade 304 Taiwan; lighting and fan; emergency bell; tiles; TFT LCD display COP; intercom.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** Total lift cost PKR 3,500,000. Payment (printed PKR amounts): advance (guides and doors) 1,000,000; machine (after guide and door work) 800,000; cabin and ropes (after machine fixed) 800,000; control and electrical 800,000; after completion 100,000.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q040 — `Quotation.pdf`
- **Identification / Content:** Identical quotation text to Q035 (`pharma.docx`) rendered as PDF on "EXCELLENT ELEVATOR" letterhead (contact 0313 0222389; excellentelevator@gmail.com). Recipient Mr Nadeem Zia, M/s AGP Pharma; 26/06/2025; Karachi. Modification scope (glass doors, gearless machine 1000 kg, roping, Monarch control, landing buttons, cabin interior upgrade); PKR 4,000,000; 50/30/15/5 payment; signed M. Ahmed Sharif.

### Q041 — `QUOTATUIN.docx`
- **Identification:** "Quotation Sheet & Specification of FUJI Service Elevator". Ref SIL/EEE/001/2025. Dated Aug 25, 2025 (Revised 27/08/2025). Supplier: Excellent Elevator Engineering. Project: SUNPO INDUSTRIES (PVT) LTD.
- **Lift / Project:** FUJI (imported) passenger lift 1000 kg and service (cargo) lift 1600 kg. Speed 1.0 m/s. Type field printed "FHSP 1000kg -1.0m/s - 6/6/6" and "FHSP 1600kg -1.0m/s - 6/6/6"; basic specification table prints 7 floors / 7 stops (Unclear — inconsistent figures). 1 car entrance. Machine room type. Standard: EN81-20:2014 & EN81-50:2014. Drive FUJI VVVF; control simplex full collective. Power 380 V / AC 3-phase 5 lines; lighting 220 V / AC; 50 Hz.
- **Doors:** Passenger: cabin door VVVF operator, infrared light curtain protection, hairline stainless steel door; landing door 2 panels center opening 800 mm × 2100 mm, hairline stainless steel (all floors), narrow jamb. Service (cargo): cabin door "no"; landing door "no".
- **Machine / Drive:** Traction machine FUJI (Japan-China joint venture); VVVF inverter FUJI; encoder HEIDENHAIN (Germany); contactor FE (FUJI); control board FUJI; IGBT INFINEON; EEPROM ATMEL; DSP board TI; safety curtain WECO; traveling cable FUJI NANTOG; door operator control PANASONIC; guide rail BAOLI; steel ropes SAFETY; buffer / overrunning governor / safety claw AODERPU.
- **Mechanical:** Shaft net size passenger W1800 mm × D2400 mm; service W2400 mm × D2400 mm. Pit depth 1500 mm; overhead height 4500 mm; travel height as per drawing.
- **Cabin:** Passenger W1350 × D1800 mm, service W1950 × D1800 mm; clear height 2300 mm; car door 800 × 2100 / 1100 × 2100 mm; cabin type HD-JX12; hairline stainless steel; LED lighting; ceiling as cabin design; flooring PVC (passenger) / checked steel plate (service); handrail one set (FJ-FS04); low-noise axial-flow fan.
- **COP / LOP:** FUJI logo; LCD display; floor display G,2,3 etc.; main floor landing G; car call HD-CBZ1; door call HD-XBZ1; registration with glow display; fireman switch at main floor.
- **Functions:** 55 standard functions printed as "YES" (inspection operation; slow speed running; automatic door opening time adjustment; full load bypass; automatic turn off lighting and fan; automatic return to home landing; door reclosing; error recording; hoistway self learning; attendant service; bypass operation; overload protection; reversal running protection; anti terminal over running; motor temperature protection; interphone communication; alarm bell; emergency lighting; fire running function; etc.).
- **Structure:** Not specified (machine-room lift).
- **Electrical / Safety:** Configuration and function lists as printed; infrared light curtain protection; over speed protection; phase protection; ARD-equivalent functions via automatic rescue functions list (fire running, emergency lighting).
- **Commercial:** Supply prices CIF Karachi (USD): FHSP 1600 kg (without doors) USD 15,050; FHSP 1000 kg USD 14,150; total USD 29,200. Terms: delivery within 40 working days after confirmed specs/drawing/contract and receipt of down payment; payment 40% T/T down, 60% T/T 15 days before delivery; validity 30 days; guarantee 12 months after shipment; manufacturing time 2 months after approval and full receipt per payment terms; no cancellation/refund after advance; customs duties/taxes, customs clearance, demurrage/penalty borne by buyer; shipment CIF Karachi. Installation & commissioning: FHSP 1600 kg cargo PKR 1,200,000; FHSP 1000 kg passenger PKR 1,000,000; total PKR 2,200,000; payment 60% / 30% / 10%. Local made door for cargo 1600 kg lift: qty 6 at PKR 85,000 each = PKR 510,000 (spec: MS book type, 14 gauge chokhat, 16 gauge pipe, 18-gauge MS sheet, powder coated, 7.5 ft × 7.5 ft).
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting for machine room.
- **After-Sales:** 12 months free maintenance and service after installation; after 12 months charges PKR 10,000 per month per lift.
- **Other:** Long numeric strings printed at end of document (not interpretable as quotation data).

### Q042 — `Quote - Copy.docx`
- **Identification:** "Quotation". Recipient: Mr Imtiaz sb. Date: 13/02/2025. Site: Karachi.
- **Lift / Project:** Dumbwaiter. Capacity 150 kg. Speed 1 m/s. 2 floors / 2 stops (G+1).
- **Doors:** 304-hairline stainless steel center opening.
- **Machine / Drive:** Gear machine 1.5 kW (imported China). Control panel: control system with imported inverter (imported China).
- **Mechanical:** Guide rail main 5 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 8 mm (imported China).
- **Cabin:** Hairline stainless steel cabin.
- **Structure:** Not specified.
- **Electrical / Safety:** Not specified (basic control system only).
- **Commercial:** Total amount PKR 800,000. Payment: 1st 50% advance (guide rail and door); 2nd 40% (machine, cabin and electrical work); final 10% after finished work and handover.
- **Owner / Customer Responsibilities:** Civil works (cutting, waterproofing, machine room hole core cutting); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Not specified.

### Q043 — `Quote SUNPO.pdf`
- **Identification:** "Supply and Installation of Imported Lift" on AAYAN ELEVATOR letterhead (R-756, Sector 19, Gulshan-e-Jamal Colony). Client: Sunpo Industries. Date: 28/08/2025. Project site: EPZA. PARTIAL extraction — READABLE header/spec sections; payment/pricing portions of the PDF are garbled in extraction and treated as "Unclear".
- **Lift / Project:** Imported lifts, brand "Sigma Shanghai". (1) Passenger lift 1000 kg; (2) cargo lift 1600 kg. Both speed 1 m/s. 6 floors / 6 stops (G+5).
- **Doors:** Passenger: automatic doors 800 mm; cargo: automatic doors 1100 mm. Panels stainless steel 304 Taiwan. Door drive VVVF.
- **Machine / Drive:** Passenger: gearless machine 1000 kg; control 7.5 kW Monarch (7.5 kW inverter). Cargo: gearless machine 1600 kg; control 11 kW Monarch (inverter figure printed 7.5 kW in source). Roping steel wire (hemp core, imported China).
- **Mechanical:** Passenger guide rail main 10 mm solid × counterweight 16 mm hollow; cargo main 16 mm solid × 16 mm hollow (imported China).
- **Cabin:** Passenger: stainless steel walls, mirrored edging design, lighting and fan, emergency bell, tiles, TFT LCD display COP. (Cargo cabin list not fully readable.)
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock protection; position-limit protection (readable portions).
- **Commercial:** Amounts and payment schedule: Unclear (not reliably extractable from this PDF).
- **All other fields:** Unclear / as above.
- **Other:** Content mirrors Q020 (Sunpo imported lifts) but issued on a different letterhead (Aayan Elevator).

### Q044 — `Quote.docx`
- **Identification:** "Quotation for Supply & Installation of Electrical work of Passenger Lift". Recipient: Mr Salman Zia. Date: 29/09/2025. Site: Karachi.
- **Lift / Project:** Electrical-works scope for a passenger lift; lift specification: Not specified.
- **Electrical / Safety (itemized PKR):** Door drive 150,000; Control panel Monarch 250,000; ARD 100,000; Speed governor with rope 60,000; COP LOP 55,000; Counterweight blocks 60,000; Traveling cable 35,000; Shaft wiring 55,000; Photo cell 15,000; Door accessories and lock 20,000; False ceiling 20,000; Censor (as printed) 10,000; Buffer 20,000; Fan 8,000; PIT malba labor 20,000; Cabin shoe 20,000; Cabin handrail 20,000; Electrical labor 80,000; Mechanical labor 70,000.
- **Commercial:** Total cost Rs 1,068,000. Terms of payment: 100% Advance.
- **Owner / Customer Responsibilities:** All civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power connection with breaker and single-phase lighting to machine room.
- **All other fields:** Not specified.
- **After-Sales:** Not specified.

### Q045 — `Qurban automatic r.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Qurban. Date: 01/07/2026. Site: Sukkur.
- **Lift / Project:** Passenger. Capacity 630 kg, 7 persons. Speed 1 m/s. 5 floors / 5 stops (G+4).
- **Doors:** Automatic doors opening (600/700/800 mm) with imported seal and track; panel stainless steel grade 304 (Taiwan); door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control: 7.5 kW Monarch (original, imported China).
- **Mechanical:** Guide rail main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Stainless steel walls grade 304 Taiwan; lighting and fan; emergency bell; tiles; TFT LCD display COP. Cabin size approx 4 × 4 feet.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer.
- **Commercial:** Total lift cost PKR 3,200,000. Payment: 50% advance (guides and doors); 30% (machine and cabin); 20% (electrical work).
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); 3-phase power with breaker and single-phase lighting; scaffolding and wooden platforms.
- **After-Sales:** Free maintenance and service 2 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q046 — `Qurban swing door.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Lift". Recipient: Mr Qurban. Date: 01/07/2026. Site: Sukkur.
- **Lift / Project:** Passenger. Capacity 500 kg, 5 persons. Speed 1 m/s. 5 floors / 5 stops (G+4).
- **Doors:** Manual swing door 700/800 mm; panel M-S powder coating.
- **Machine / Drive:** Geared machine 5.5 kW (reconditioned). Control panel: "Aebay Control" (as printed) with imported inverter 7.5 kW (imported China).
- **Mechanical:** Guide rail main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** M-S wall powder coating; lighting and fan; emergency bell; tiles; LCD display COP. Cabin size approx 4 × 4 feet.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer.
- **Commercial:** Total lift cost PKR 2,500,000. Payment: 50% advance (guides and doors); 30% (machine and cabin); 20% (electrical work).
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); 3-phase power with breaker and single-phase lighting; scaffolding and wooden platforms.
- **After-Sales:** Free maintenance and service 2 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q047 — `Sahil comeercial.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Glass Lift". Recipient: Mr Qamar Mansha. Date: 27/06/2025. Site: Karachi.
- **Lift / Project:** Passenger (glass). Capacity 630 kg, 7 persons. Speed 1 m/s. 4 floors / 4 stops (B+G+1+Roof).
- **Doors:** Automatic doors 700 mm opening, imported seal and track (China); panel stainless steel 304 Taiwan with 6 mm tempered glass; door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 4.2 kW, 630 kg (imported China). Control: 7.5 kW Monarch (7.5 kW inverter).
- **Mechanical:** Guide rail main 9 or 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Not separately detailed.
- **Structure:** Structure cost PKR 600,000 — main framework 4"×4" MS square pipe 4 mm; support structure 4"×2" MS channel; estimated height approx 50 feet.
- **Glass:** 6 mm tempered glass (door panels).
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer; ARD.
- **Commercial:** Lift cost PKR 2,900,000; structure cost PKR 600,000 (printed as separate amounts). Payment: 40% advance; 20% after fix guide and door; 25% after fixed machine; 12% after fixed cabin and roping; 3% final.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting.
- **After-Sales:** Not specified.
- **Other:** Delivery within 60 days (excluding civil work).

### Q048 — `Saleh sb.docx`
- **Identification:** "Quotation for Supply and Installation of Passenger Glass Lift". Recipient: Mr Saleh Muhammad, M/s SAK Timber. Date: 29/09/2025. Site: Karachi.
- **Lift / Project:** Passenger (glass). Capacity 1000 kg, 13 persons. Speed 1 m/s. 7 floors / 7 stops (B+G+1+2+3+4+Roof).
- **Doors:** Automatic 800 mm opening, imported seal and track (China); panel stainless steel 304 Taiwan with 6 mm tempered glass; door drive VVVF (imported China).
- **Machine / Drive:** Gearless machine 6.2 kW, 1000 kg (imported China). Control: 11 kW Monarch (original, imported China).
- **Mechanical:** Guide rail main 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Tempered glass 8 mm; stainless steel walls grade 304 Taiwan; lighting and fan; emergency bell; tiles; TFT LCD display COP.
- **Structure:** Not specified in this document (structure quotation exists separately — see Q024).
- **Glass:** 6 mm tempered glass (door panels); 8 mm tempered glass (cabin).
- **Electrical / Safety:** Emergency brake; door interlock; position-limit; buffer spring; buzzer.
- **Commercial:** Lift cost PKR 3,450,000. Payment: 40% advance; 20% after fix guide and door; 25% after fixed machine; 12% after fixed cabin and roping; 3% final.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q049 — `Sanjay sb.docx`
- **Identification:** "Supply and Installation of Semi-Imported Passenger Lift" (Contract). Recipient: Mr Sanjay Pinjani, M/s Sunny Associates. Date: 17/06/2023.
- **Lift / Project:** Passenger. Capacity 630 kg, speed 1 m/s. 7 floors / 7 stops (G+6).
- **Doors:** Stainless steel automatic center opening door.
- **Machine / Drive:** Gearless machine 4.2 kW (imported China). Control panel: 7.5 kW Monarch inverter control system (imported China).
- **Mechanical:** Guide rail main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 10 mm, W-roping (imported China).
- **Cabin:** Car stainless steel wall; edging design mirror steel; light; fan; digital LCD indicator; emergency bell; tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer/alarm/intercom.
- **Commercial:** Lift cost Rs 3,025,000 (Rupees Three Million Twenty Five Thousand Only). Payment: 40% advance (guide rail and door); 20% machine; 25% cabin; 13% electrical; 2% final at handover.
- **Additional item:** 11 kW automatic rescue device: Rs 150,000 charged separately after complete installation.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q050 — `shahrukh sb.pdf`
- **Identification:** "Quotation for Passenger Lift" on EXCELLENT ELEVATOR letterhead (contact 0313 0222389). Recipient: Mr Shahrukh. Date: 29/01/2026. Site: Karachi. PARTIAL extraction — tail (delivery / free maintenance portions) garbled.
- **Lift / Project:** Passenger. Capacity / speed: Not specified. 5 floors / 6 stops (as printed).
- **Doors:** Automatic center opening; hairline stainless steel panel; door drive VVVF (imported China).
- **Machine / Drive:** Control panel: Hedefsan control system with imported 7.5 kW inverter (China). Lift machine: Not specified.
- **Mechanical:** Roping: steel wire rope (hemp core, imported China).
- **Cabin:** Hairline stainless steel wall with edging design, TFT display, fan, light, tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock protection; position-limit protection (readable portions).
- **Commercial:** Total quotation amount PKR 1,950,000; amount in words printed in the PDF reads "Four Million Three Hundred Thousand Only" (inconsistent with the numeric value — Unclear). Payment: 50% for cabin roping; 40% for control, wiring and door drives; 10% upon final completion.
- **Owner / Customer Responsibilities:** Civil works; scaffolding; 3-phase / single-phase supply (readable portions; partially garbled).
- **After-Sales:** Not reliably extractable (Unclear).
- **Other:** Delivery completion section present but garbled.

### Q051 — `SSD Quotation.docx`
- **Identification:** "Supply and Installation of Semi-Imported Passenger Lift" (Contract). Recipient: Mr Kanya Lal. Date: 17/07/2023.
- **Lift / Project:** Passenger. Capacity 630 kg, speed 1 m/s. 9 floors / 9 stops (G+8).
- **Doors:** Stainless steel automatic center opening door.
- **Machine / Drive:** Gearless machine 4.2 kW (imported China). Control panel: 7.5 kW Monarch inverter control system (imported China).
- **Mechanical:** Guide rail main 9 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 10 mm, W-roping (imported China).
- **Cabin:** Car stainless steel wall; edging design mirror steel; light; fan; digital LCD indicator; emergency bell; tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** Door interlock protection; position-limit protection; buffer spring; buzzer/alarm/intercom.
- **Commercial:** Lift cost Rs 3,375,000 per unit; quantity 4; total amount Rs 13,500,000. Payment: 40% advance; 20% machine; 25% cabin; 13% electrical; 2% final at handover.
- **Additional item:** 11 kW automatic rescue device: Rs 150,000 charged separately.
- **Owner / Customer Responsibilities:** Civil works (cutting, concrete pouring, waterproofing); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q052 — `Structure quotation.pdf`
- **Identification:** "Quotation for Structure". Recipient: Mr Tariq. M/s Sunpo Industries. Date: 21/11/2025. Site: KEPZ.
- **Lift / Project:** Structure-only quotation, designed to support a 2000 kg cargo lift.
- **Structure:** Overall size height 98 ft × depth 7 ft × width 9 ft, for 2000 kg load with safe load distribution; main vertical channels 6"×3" mild steel 5 mm (primary load-bearing columns); horizontal supporting channels 4"×2" mild steel 5 mm (regular intervals bracing); cross supporting angles 2"×2" mild steel 3 mm (diagonal lateral reinforcement); heavy-duty MS structure fully welded and aligned for guide rail accuracy; anti-rust primer coating included; designed to meet load, vibration and safety requirements for industrial cargo operations.
- **Commercial:** Total structure cost PKR 2,800,000 (TWO MILLION EIGHT HUNDRED THOUSAND ONLY). Payment: 100% advance for structural fabrication, material procurement and installation scheduling.
- **All other fields:** Not specified.
- **Other:** Companion document to Q029/Q030/Q056 (structure component).

### Q053 — `Sunpo 2000kg.docx`
- **Identification:** "Quotation for Supply and Installation of Cargo Lift". Recipient: Mr Tariq. Date: 21/11/2025. M/s Sunpo Industries. Site: KEPZ.
- **Lift / Project:** Cargo. Capacity 2000 kg. Speed 1 m/s. 6 floors / 6 stops (travel height 98 feet).
- **Doors:** M/S door book type (local fabricated), clear opening 6 ft.
- **Machine / Drive:** Geared machine 11 kW, 2000 kg (imported) BRAND NEW. Control: hedefsan card control system with imported inverter 15 kW.
- **Mechanical:** Guide rail main 16 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core).
- **Cabin:** Heavy duty MS sheet cabin with checker plate base.
- **Structure:** Not included.
- **Electrical / Safety:** Door interlock; position-limit; buffer spring; buzzer.
- **Commercial:** Lift cost PKR 5,500,000 (Five Million Five Hundred Thousand Only). Payment: 50% / 35% / 15%.
- **Owner / Customer Responsibilities:** Civil works; scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting.
- **After-Sales:** Free maintenance and service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q054 — `Sunpo Quote.docx`
- **Identification:** "Quotation Sheet & Specification of FUJI Service Elevator". Ref SIL/EEE/001/2025. Dated Aug 25, 2025 (Revised 27/08/2025). Supplier Excellent Elevator Engineering. Project SUNPO INDUSTRIES (PVT) LTD. Type column: only "FHSP 1000kg -1.0m/s - 6/6/6" (passenger lift); the price list retains both the 1600 kg and 1000 kg lines.
- **Lift / Project:** FUJI passenger lift 1000 kg, 1.0 m/s. Type 6/6/6; basic spec table prints 7 floors / 7 stops (Unclear). MR. EN81-20:2014 & EN81-50:2014. FUJI VVVF; simplex full collective. 380 V / AC 3-phase 5 lines; 220 V lighting; 50 Hz.
- **Doors:** Cabin door VVVF + infrared light curtain; hairline stainless steel; landing door 2 panels center opening 800 × 2100 mm, hairline SS all floors, narrow jamb.
- **Machine / Drive:** FUJI traction machine; configuration list as printed (FUJI control board/VVVF; INFINEON IGBT; ATMEL EEPROM; TI DSP/CAN; HEIDENHAIN encoder; FE contactor; WECO safety curtain; PANASONIC door operator; BAOLI guide rail; SAFETY ropes; AODERPU buffer/governor/safety claw).
- **Mechanical:** Shaft W1800 × D2400 mm; pit 1500 mm; overhead 4500 mm.
- **Cabin:** W1350 × D1800 mm; clear height 2300 mm; car door 800 × 2100; cabin type HD-JX12; hairline SS; LED; ceiling as cabin design; flooring PVC; handrail one set (FJ-FS04); low-noise axial-flow fan.
- **Functions:** 55 standard functions printed (list as Q041).
- **Commercial:** Supply prices (USD CIF Karachi): FHSP 1600 kg (without doors) 15,050; FHSP 1000 kg 14,150; total in words "Twenty Nine Thousand Two Hundred US Dollars" (no computed numeric total printed). Supply terms: 40% T/T down + 60% T/T 15 days before delivery; 40 working days delivery after confirmed specs and down payment; validity 30 days; guarantee 12 months after shipment; manufacturing 2 months; no refund after advance; customs duties/clearance/demurrage by buyer; CIF Karachi. Installation: payment terms 60/30/10 printed (no itemized installation table in extract).
- **Owner / Customer Responsibilities:** Civil works; scaffolding and wooden platforms; 3-phase power with breaker and single-phase lighting.
- **After-Sales:** 12 months free maintenance and service; after 12 months PKR 10,000 per month per lift.
- **Other:** Long numeric strings printed at end (not interpretable as quotation data).

### Q055 — `Sunpo Revised Quotation.pdf`
- **Identification:** "Quotation Sheet & Specification of FUJI Service Elevator" on "Excellent Elevator Engineering" letterhead. Dated Aug 25, 2025. Supplier Excellent Elevator Engineering. Project SUNPO INDUSTRIES (PVT) LTD. Type: "FHSP 1000kg -1.0m/s - 7/7/7" and "FHSP 1600kg -1.0m/s - 7/7/7". PARTIAL extraction — portions of the tail (freight/maintenance phrases) garbled.
- **Lift / Project:** FUJI passenger lift 1000 kg and service (cargo) lift 1600 kg; 1.0 m/s; 7 floors / 7 stops per basic spec; MR; EN81-20:2014 & EN81-50:2014; FUJI VVVF; simplex full collective; 380 V / 3-phase 5 lines; 220 V lighting; 50 Hz.
- **Doors:** Passenger cabin door VVVF + IR light curtain; landing 2-panel center opening 800 × 2100; service: cabin door "no", landing door "no"; hairline SS all floors; narrow jamb.
- **Machine / Drive:** FUJI configuration list (as Q041/Q054).
- **Mechanical:** Shaft passenger W1800 × D2400 / service W2400 × D2400; pit 1500 mm; overhead 4500 mm.
- **Cabin:** Passenger W1350 × D1800 / service W1950 × D1800; clear 2300 mm; car door 800 × 2100 / 1100 × 2100; HD-JX12; hairline SS; LED; PVC (passenger) / checked steel plate (service); handrail FJ-FS04; fan.
- **Functions:** 55 standard functions printed (as Q041).
- **Commercial:** Supply prices (USD CIF Karachi), labels printed as "5/5/5 MR" with 7/7 stops context (Unclear): FHSP 1600 kg 14,500 (total 15,500 as printed); FHSP 1000 kg 13,800 (total 14,300 as printed); total in words "Twenty Nine Thousand Eight Hundred US Dollars". Supply terms: 40% T/T + 60% T/T 15 days before delivery; 40 working days delivery; validity 30 days; guarantee 12 months after shipment; manufacturing 2 months; no refund after advance; customs duties/clearance/demurrage by buyer; CIF Karachi. Installation & commissioning: FHSP 1600 kg cargo PKR 1,500,000; FHSP 1000 kg passenger PKR 1,300,000; total in words "Two Million Eight Hundred Thousand" (numeric total line garbled; item figures printed). Installation payment 60% / 30% / 10%.
- **After-Sales:** Free maintenance / post-12-month charges section garbled (Unclear).
- **Other:** Delivery of supply 40 working days (as Q041).

### Q056 — `Sunpo structure 2000kg.docx`
- **Identification / Content:** Identical quotation text to Q029/Q030 (REVISED #01, cargo lift; PO#001/2025), DOCX version. Cargo 2000 kg, 1 m/s, 6/6, travel height 98 ft; geared 11 kW; M/S book doors; lift PKR 5,500,000; discount PKR 500,000; structure PKR 2,800,000; total PKR 7,800,000; 50/35/15 lift + 100% structure; structure spec 6"×3" / 4"×2" / 2"×2" MS members, anti-rust primer; 90-day delivery; 6 months free maintenance.

### Q057 — `Tabish sb.docx`
- **Identification / Content:** Identical quotation text to Q036 (`Phs-8 Tabish sb.docx`). Recipient Mr Tabish sb, 20/05/2024, Phase-8 DHA Karachi. Passenger 1000 kg, 1 m/s, 7/7 (B+G+4+Roof); 304-hairline SS with glass 1000 mm NBOL; gearless 6.4 kW TorinDrive; Rs 3,400,000 no tax; 30/20/25/20/5 payment. As Q036, and additionally prints: warranty free service 6 months and parts 1 year (except damage due to voltage fluctuation); service charges after 6 months PKR 5,000/month; steel girder provided by customer; additional cabin parts by client.

### Q058 — `V T S.docx`
- **Identification:** Set-of-works quotation. Recipient: (DHA Karachi). Date: 16/April/2024.
- **Scope (as printed):** Control panel replacement with Monarch; landing push button replacement; convert into duplex lifts; complete service.
- **Commercial:** Charges PKR 650,000. Additional work: automatic rescue device (ARD) — charges PKR 200,000. Payment: advance.
- **Important note (as printed):** "during work if any part or equipment need to replace will be charge separately."
- **Lift specification:** Not specified (modernization/duplexing scope only).
- **All other fields:** Not specified.

### Q059 — `Vijay Sukkur Contract.docx`
- **Identification:** "Supply and Installation of Semi-Imported Passenger Lift" (CONTRACT). Recipient: Mr Vijay Kumar sb. Date: 05/02/2024. Site: Sukkur. Contract# EEE/001/2024. Seller/buyer signature lines.
- **Lift / Project:** Passenger. Capacity 630 kg. Speed 1 m/s. 7 floors / 7 stops (G+6).
- **Doors:** Door panel hairline stainless steel 800 mm; door track 800 mm center opening imported China (NBOL Brand); door drive VVVF imported China (NBOL Brand).
- **Machine / Drive:** Gearless machine 4.2 kW (imported China). Control panel: Monarch control system (imported China).
- **Mechanical:** Guide rail main 9 or 10 mm solid × counterweight 16 mm hollow (imported China). Roping: steel wire rope (hemp core) 10 mm (imported China).
- **Cabin:** Stainless steel wall; edging design mirror sheet; light; fan; digital TFT LCD display; LCD display landing push button; emergency bell; false ceiling; tiles.
- **Structure:** Not specified.
- **Electrical / Safety:** Emergency brake; door interlock; position limits; buffer spring; buzzer; ARD.
- **Commercial:** Lift cost per unit Rs 3,500,000 (Rupees Three Million Five Hundred Thousand Only). Payment: 40% advance (guide rail and door); 25% machine; 20% cabin; 13% electrical; 2% final at handover.
- **Owner / Customer Responsibilities:** Civil works (cutting, waterproofing, machine room hole core cutting); scaffolding and wooden planks; 3-phase power with breaker and single-phase lighting to machine room.
- **After-Sales:** Free maintenance & service 6 months.
- **Other:** Delivery within 60 days (excluding civil work).

### Q060 — `Vijay Sukkur.docx`
- **Identification / Content:** Same quotation text as Q059 rendered as "QUOTATION" (no contract number; buyer signature line absent). Recipient Mr Vijay Kumar sb, 05/02/2024, Sukkur. Passenger 630 kg, 1 m/s, 7/7 G+6; Rs 3,500,000; 40/25/20/13/2 payment; 6 months free maintenance; 60-day delivery.

### Q061 — `winch.docx`
- **Identification:** "Quotation". Recipient: Mr Asif Yaqoob sb. Date: 06/04/2026. Site: Karachi.
- **Lift / Project:** Not a standard lift quotation — winch/girder trolley arrangement. Items (as printed): side girder 5×10, 130 ft; center girder 6×12, 25 ft, 2 pcs; side trolley 4 pcs; bracket plate; chain motor 2-ton, 2 pcs; cable 6 mm, 180 ft; ceiling wire; labor.
- **Commercial:** Total cost Rs 2,150,000 (Rupees Two Million One Hundred Fifty Thousand Only). Terms of payment: 100% Advance.
- **All other fields:** Not specified.

---

## 4. Summary Table

ID | Filename | Date | Lift Type | Capacity | Floors | Stops | Speed | Door Type | Cabin Type | Structure | Glass | Total Amount | Payment Terms | Completion Time | Free Maintenance
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
Q001 | Ashfaq s. Quote.docx | 13 Feb 2023 | Passenger | 630 kg | 6 | 6 | 1 m/s | SS frame + glass panel (local), track/seal imported China | SS wall; mirror edging; light; fan; LCD; bell; tiles; ~4.5×3.5×8 ft | Not specified | Glass in door panels | Rs 3,700,000 (with standard cabin) | 40/20/25/12/final | 60 days | 6 months
Q002 | BILAL SB.docx | 18/11/2025 | Passenger glass | 630 kg (7 persons) | 4 | 4 | 1 m/s | Automatic 800 mm; SS 304 TW + 6 mm tempered glass | SS 304 TW; 8 mm tempered glass; light; fan; bell; tiles; TFT LCD | 4"×4" pipe 4 mm + 2"×4" channel | 8 mm (cabin); 6 mm (door) | PKR 4,100,000 | 35/15/15/15/20 | 60 days | 6 months
Q003 | Cargo Lift Quotation 2000kg.pdf | 21/11/2025 | Cargo | 2000 kg | 6 | 6 | 1 m/s | M/S book type (local), 6 ft clear | MS sheet cabin + checker plate base | Not included | Not specified | PKR 5,500,000 | 50/35/15 | 60 days | 6 months
Q004 | Complete Cargo Lift.pdf | 24/01/2026 | Cargo | 1600 kg | 6 | 6 | 1 m/s | M/S book type (local), 6 ft clear | SS 304 wall; checker plate base; int. height 9 ft (shaft 8×8 ft) | Not specified | Not specified | PKR 4,900,000 | 50/35/15 | 60 days | 6 months
Q005 | Complete Cargo.docx | 24/01/2026 | Cargo | 1600 kg | 6 | 6 | 1 m/s | M/S book type (local), 6 ft clear | As Q004 | Not specified | Not specified | PKR 4,900,000 | 50/35/15 | 60 days | 6 months
Q006 | Complete Passenger Lift.pdf | 24/01/2026 | Passenger (usage field printed "CARGO") | 1000 kg | 6 | 6 | 1 m/s | Automatic center opening 800 mm; SS 304 (local) | SS 304; tile base; int. height 9 ft (shaft 8×6 ft) | Not specified | Not specified | PKR 4,500,000 | 50/35/15 | 60 days | 6 months
Q007 | Complete Passenger.docx | 24/01/2026 | As Q006 | 1000 kg | 6 | 6 | 1 m/s | As Q006 | As Q006 | Not specified | Not specified | PKR 4,500,000 | 50/35/15 | 60 days | 6 months
Q008 | Excellent_Elevator_Quotation.docx | 29/09/2025 | Electrical works (passenger) | Not specified | Not specified | Not specified | Not specified | Not specified (door-drive items) | Not specified | Not specified | Not specified | Rs 1,150,000 | 100% advance | Not specified | Not specified
Q009 | Fishri new WITH STRUCTURE.docx | 10/07/2025 (rev 17/11/2025) | Passenger | 550 kg (6 persons) | 3 | 3 | 1 m/s | Automatic 800 mm; SS 800 mm (local) | Not separately detailed | New structure PKR 600,000 (4"×4" pipe 4 mm + 4"×2" channel) | Not specified | PKR 3,800,000 (lift 3,200,000 + structure 600,000) | 40/20/25/12/3 | 60 days | 6 months
Q010 | Fishri new.docx | 10/07/2025 (rev 27/01/2026) | Passenger | 550 kg (6 persons) | 3 | 3 | 1 m/s | Automatic 800 mm; SS 800 mm (local) | Not separately detailed | Not included (covering by owner) | Not specified | PKR 3,200,000 | 40/20/25/12/3 | 60 days | 6 months
Q011 | Fishri old.docx | 10/07/2025 | Passenger | 550 kg (6 persons) | 3 | 3 | 1 m/s | Automatic 800 mm; SS 800 mm (local) | Not separately detailed | PKR 450,000 (4"×2" channel; container sheet 24 gauge; ~40 ft) | Not specified | PKR 2,900,000 + PKR 450,000 (struct.) | 40/20/25/12/3 | 60 days | 6 months
Q012 | Fishri Revised quote.pdf | 10/07/2025 (rev 27/01/2026) | Passenger | 550 kg (6 persons) | 3 | 3 | 1 m/s | Automatic 800 mm; SS 800 mm (local) | Not separately detailed | Not specified | Not specified | PKR 3,200,000 | PKR 1,000,000/1,500,000/600,000/100,000 | 60 days | 6 months
Q013 | g5 swing.docx | 27/03/2026 | Cargo | 1000 kg (heading) / "100 kg" (body) — Unclear | 4 | 4 | 1 m/s | Automatic SS 900 mm, seal/track imported | SS walls; mirror edging; light; fan; LCD; bell; tiles; intercom; 4.5×7.5 ft | Not specified | Not specified | Rs 4,000,000 | 40/25/20/13/2 | 60 days | 1 year
Q014 | Hill park 2.docx | 02/01/2025 (rev 04/04/2025) | Passenger | 450 kg | 4 | 4 | 1 m/s | Hairline SS automatic 600 mm, imported seal/track | SS walls; mirrored edging; light; fan; bell; tiles; LCD | Not specified | Not specified | Rs 2,100,000 | 40/20/25/15 | 60 days | 6 months
Q015 | hyd 2000kg.docx | 31/07/2025 | Upgrade (passenger lifts G+3, G+2) | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | PKR 2,200,000/lift ×2 = PKR 4,400,000 | 90/10 | Not specified | 6 months
Q016 | hyd 3000kg.docx | 07/01/2025 | Cargo | 3000 kg (body) / 2000 kg (heading) — Unclear | 3 | 3 | Not specified | Manual book type | SS walls; mirror edging; light; fan; LCD; bell; tiles; intercom (shaft 13×8 ft) | Not specified | Not specified | Rs 4,500,000 | 40/25/20/13/2 | 60 days | 1 year
Q017 | iqbal.docx | 29/01/2026 | Passenger | Not specified | 5 | 6 | Not specified | Automatic center opening; hairline SS | Hairline SS; TFT; fan; light; tiles | Not specified | Not specified | PKR 1,950,000 | 50/40/10 | 60 days | Not specified
Q018 | Irfan sb.docx | 27/05/2025 (rev 11/02/2026) | Passenger | 630 kg (7 persons) | 7 | 7 | 1 m/s | Hairline SS (local); 700 mm center opening NBOL (China) | Edging design rear; hairline SS sides; TFT LCD; fan; false ceiling; tiles | Not specified | Not specified | PKR 3,150,000 | 40/20/20/13/2 | 70 days | 1 year
Q019 | kh Iqbal.pdf | 26/06/2025 | Passenger glass | 1000 kg (10 persons) | 3 | 3 | 1 m/s | Automatic 800 mm; SS 304 TW + 6 mm tempered glass | Not specified | Not specified | 6 mm (door) | PKR 4,300,000 | 40/20/20/15/5 | 60 days | Not specified
Q020 | Lahore - Copy (SUNPO INDUSTRIES).docx | 28/08/2025 | Imported passenger + cargo (Sigma Shanghai) | 1000 kg + 1600 kg | 6 | 6 | 1 m/s | Automatic 800 mm (pass.) / 1100 mm (cargo); SS 304 TW | SS walls; mirrored edging; light; fan; bell; tiles; TFT; cargo + checker plate | Not specified | Not specified | Lift USD 16,000 + 19,000 (CIF) = USD 35,000; install PKR 1,800,000 + 2,000,000 = PKR 3,800,000 | Lift 70/30; install Not specified | 90 days | 6 months
Q021 | Lahore - Copy.docx | 31/07/2025 | Passenger glass | 630 kg (8 persons) | 3 / 4 | 3 / 4 | 1 m/s | Automatic 800 mm; SS 304 TW | SS walls; mirrored edging; light; fan; bell; tiles; TFT | Not specified | Not specified | G+3 PKR 4,300,000; G+2 PKR 4,000,000 | 40/20/20/15/5 | 60 days | 6 months
Q022 | Lahore.docx | 31/07/2025 | As Q021 | 630 kg (8 persons) | 3 / 4 | 3 / 4 | 1 m/s | As Q021 | As Q021 | Not specified | Not specified | As Q021 | 40/20/20/15/5 | 60 days | 6 months
Q023 | LIFT STRUCTURE Bilal sb.docx | 13/10/2025 | Structure only | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | 4"×4" MS pipe 4 mm; 4"×2" channel; ~50 ft | Not specified | PKR 700,000 | 100% advance | Not specified | Not specified
Q024 | LIFT STRUCTURE.docx | 29/09/2025 | Structure only | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | 4"×2" channel (double for pipe); ~80 ft | Not specified | PKR 1,150,000 | 100% advance | Not specified | Not specified
Q025 | malir.docx | 09/05/2026 | Passenger | Not specified | 5 | 5 | Not specified | Automatic center opening 1000; hairline SS + glass | Hairline SS; TFT; fan; light; tiles; cabin ~6.5×6.5 ft (shaft 8×8 ft) | Not specified | Glass in door | PKR 3,550,000 | 40/20/20/17/3 | 60 days | Not specified
Q026 | Mushtaq bhai.docx | 30-May-2023 | Passenger | 450 kg (5 persons) | 1 | 1 | 1 m/s | Swing door 800 mm | SS wall; mirror edging; light; fan; indicator; bell; tiles | Rs 400,000 structure (100% advance) | Not specified | Rs 2,250,000 (lift) + Rs 400,000 (structure) | 60/25/10/final | 60 days | 6 months
Q027 | Naveed Anjum.docx | 30/05/2024 | Passenger | 630 kg | 5 | 5 | 1 m/s | Hairline SS 800 mm; NBOL track (China) | SS wall; mirror edging; TFT LCD; LCD landing; bell; false ceiling; tiles | Not specified | Not specified | PKR 2,205,000 (after discount; lift 2,400,000 − 225,000 + branch 30,000) | 1st PKR 750,000; then 25/20/13/2 | 60 days | 6 months
Q028 | NAVEED BHAI.docx | 09/10/2025 | Passenger glass | 1000 kg | 6 | 6 | 1 m/s | Automatic 800 mm; SS 304 TW + 6 mm tempered glass | SS walls; mirrored edging; light; fan; bell; tiles; TFT; 6 mm glass door | Not specified | 6 mm (door) | Rs 3,550,000 (local cabin) / Rs 4,600,000 (imported cabin) | 40/20/25/12/3 | 60 days | 6 months
Q029 | P.O  01 REVISED QUOTE.pdf | 21/11/2025 | Cargo | 2000 kg | 6 | 6 | 1 m/s | M/S book type (local), 6 ft clear | MS sheet cabin + checker plate base | PKR 2,800,000 (98×7×9 ft; 6"×3"/4"×2"/2"×2" MS) | Not specified | PKR 7,800,000 (lift 5,500,000 − 500,000 + structure 2,800,000) | Lift 50/35/15; structure 100% | 90 days | 6 months
Q030 | P.O 01 QUOTATION.docx | 21/11/2025 | As Q029 | 2000 kg | 6 | 6 | 1 m/s | As Q029 | As Q029 | As Q029 (2,800,000) | Not specified | PKR 7,800,000 | As Q029 | 90 days | 6 months
Q031 | P.O 02 QUOTATION.pdf | 26/11/2025 | Cargo doors + cabin; installation of cargo 1600 kg + passenger 1000 kg | 1600 kg (doors/cabin); 1600 kg + 1000 kg (install) | 6 | 6 | 1.0 m/s | Local MS book type 7.5×7.5 ft (qty 6) | SS 304 cabin (shaft 8×8 ft; 9 ft int. height) | Not included | Not specified | Doors+cabin PKR 2,010,000; install PKR 2,200,000 | Doors/cabin 100%; install 60/30/10 | Not specified | 12 months
Q032 | P.O 02.docx | 14/01/2026 (rev 22/01/2026) | Cargo doors + cabin; installation of cargo 1600 kg | 1600 kg | 6 | 6 | 1.0 m/s | Local MS book type 7.5×7.5 ft (qty 6) | SS 304 cabin (shaft 8×8 ft; 9 ft int. height) | Not included | Not specified | Doors+cabin PKR 1,800,000 (after 10% discount); install PKR 1,200,000 | Doors/cabin 100%; install 60/30/10 | Not specified | 12 months
Q033 | P.O 03.docx | 14/01/2026 (rev 22/01/2026) | Passenger doors + door drive + cabin; installation of passenger 1000 kg | 1000 kg | 6 | 6 | 1.0 m/s | Local SS automatic 800 mm (qty 6) + imported door drive | SS 304 cabin (shaft 8×6 ft; 9 ft int. height); tile base | Not included | Not specified | Doors+drive+cabin PKR 2,000,000 (after 10% discount); install PKR 1,000,000 | Doors/cabin 100%; install 60/30/10 | Not specified | 12 months
Q034 | P.O 04 Hoist lift.docx | 22/01/2026 | Hoist lift | 2000 kg | 6 | 6 | Not specified | No doors included | MS cabin base + checker plate | PKR 1,800,000 (98×7×9 ft; 4"×4" sq. pipe 5 mm etc.) | Not specified | PKR 4,700,000 (hoist 2,900,000 + structure 1,800,000) | 80/20; structure 100% | 45 days | 6 months
Q035 | pharma.docx | 26/06/2025 | Modification (existing lift) | 1000 kg (machine) | Not specified | Not specified | Not specified | Replacement with glass doors | Cabin interior upgrade | Not specified | Glass doors | PKR 4,000,000 | 50/30/15/5 | Not specified | Not specified
Q036 | Phs-8 Tabish sb.docx | 20/05/2024 | Passenger | 1000 kg | 7 | 7 | 1 m/s | 304-hairline SS + glass 1000 mm (local); NBOL (China) | SS wall; mirror edging; TFT LCD; LCD landing; bell; false ceiling; tiles | Not specified | Glass in door | Rs 3,400,000 (no tax) | 30/20/25/20/5 | 60 days | 6 months
Q037 | Qamar  Mansha - 2.docx | 06/01/2025 | Passenger | 1000 kg | 6 | 6 | 1 m/s | Automatic 800 mm NOBL (China); hairline SS 304 | Hairline SS 304 (local); counterweight frame/blocks; light; fan; tiles; 6×4×7 ft | Not specified | Not specified | PKR 3,100,000 + PKR 150,000 (generator + fuel + branch) | 30/35/20/13/2 | 60 days | 6 months
Q038 | Qamar  Mansha.docx | 06/01/2025 | As Q037 | 1000 kg | 6 | 6 | 1 m/s | As Q037 | As Q037 | Not specified | Not specified | As Q037 | 30/35/20/13/2 | 60 days | 6 months
Q039 | Qamar Mansha 2.docx | 09/06/2025 | Passenger | 630 kg (6 persons) | 6 | 6 | 1 m/s | Automatic 700/800 mm; SS 304 TW | SS 304 TW; light; fan; bell; tiles; TFT; intercom | Not specified | Not specified | PKR 3,500,000 | PKR 1,000,000/800,000/800,000/800,000/100,000 | 60 days | 6 months
Q040 | Quotation.pdf | 26/06/2025 | Modification (AGP Pharma) | 1000 kg (machine) | Not specified | Not specified | Not specified | Replacement with glass doors | Cabin interior upgrade | Not specified | Glass doors | PKR 4,000,000 | 50/30/15/5 | Not specified | Not specified
Q041 | QUOTATUIN.docx | 25/08/2025 (rev 27/08/2025) | Imported FUJI passenger + service | 1000 kg + 1600 kg | 7 (spec) / 6 (type string) — Unclear | 7 / 6 — Unclear | 1.0 m/s | FUJI 2-panel center opening (pass.); service: no doors | FUJI HD-JX12 hairline SS; PVC (pass.) / checked plate (service) | Not specified (MR) | Not specified | Supply USD 29,200 (CIF); install PKR 2,200,000; local doors PKR 510,000 | Supply 40/60; install 60/30/10; doors 100% | 40 working days (supply) | 12 months
Q042 | Quote - Copy.docx | 13/02/2025 | Dumbwaiter | 150 kg | 2 | 2 | 1 m/s | 304-hairline SS center opening | Hairline SS cabin | Not specified | Not specified | PKR 800,000 | 50/40/10 | Not specified | Not specified
Q043 | Quote SUNPO.pdf | 28/08/2025 | Imported passenger + cargo (Sigma Shanghai) | 1000 kg + 1600 kg | 6 | 6 | 1 m/s | Automatic 800 mm / 1100 mm; SS 304 TW | SS walls; mirrored edging; light; fan; bell; tiles; TFT | Not specified | Not specified | Unclear (PDF portion garbled) | Unclear | Unclear | Unclear
Q044 | Quote.docx | 29/09/2025 | Electrical works (passenger) | Not specified | Not specified | Not specified | Not specified | Door accessories/lock itemized | Cabin shoe/handrail/false ceiling items | Not specified | Not specified | Rs 1,068,000 | 100% advance | Not specified | Not specified
Q045 | Qurban automatic r.docx | 01/07/2026 | Passenger | 630 kg (7 persons) | 5 | 5 | 1 m/s | Automatic 600/700/800 mm; SS 304 TW | SS 304 TW; light; fan; bell; tiles; TFT; cabin ~4×4 ft | Not specified | Not specified | PKR 3,200,000 | 50/30/20 | 60 days | 2 months
Q046 | Qurban swing door.docx | 01/07/2026 | Passenger | 500 kg (5 persons) | 5 | 5 | 1 m/s | Manual swing 700/800 mm; MS powder coated | MS powder coated wall; light; fan; bell; tiles; LCD; cabin ~4×4 ft | Not specified | Not specified | PKR 2,500,000 | 50/30/20 | 60 days | 2 months
Q047 | Sahil comeercial.docx | 27/06/2025 | Passenger glass | 630 kg (7 persons) | 4 | 4 | 1 m/s | Automatic 700 mm; SS 304 TW + 6 mm tempered glass | Not separately detailed | PKR 600,000 (4"×4" sq. pipe 4 mm; 4"×2" channel; ~50 ft) | 6 mm (door) | PKR 2,900,000 + PKR 600,000 (struct.) | 40/20/25/12/3 | 60 days | Not specified
Q048 | Saleh sb.docx | 29/09/2025 | Passenger glass | 1000 kg (13 persons) | 7 | 7 | 1 m/s | Automatic 800 mm; SS 304 TW + 6 mm tempered glass | 8 mm tempered glass; SS 304 TW; light; fan; bell; tiles; TFT | Not specified (separate structure doc Q024) | 6 mm (door); 8 mm (cabin) | PKR 3,450,000 | 40/20/25/12/3 | 60 days | 6 months
Q049 | Sanjay sb.docx | 17/06/2023 | Passenger | 630 kg | 7 | 7 | 1 m/s | SS automatic center opening | SS wall; mirror edging; light; fan; LCD; bell; tiles | Not specified | Not specified | Rs 3,025,000 (+ Rs 150,000 ARD optional) | 40/20/25/13/2 | 60 days | 6 months
Q050 | shahrukh sb.pdf | 29/01/2026 | Passenger | Not specified | 5 | 6 | Not specified | Automatic center opening; hairline SS | Hairline SS; TFT; fan; light; tiles | Not specified | Not specified | PKR 1,950,000 (words inconsistent) | 50/40/10 | Unclear (garbled) | Unclear
Q051 | SSD Quotation.docx | 17/07/2023 | Passenger | 630 kg | 9 | 9 | 1 m/s | SS automatic center opening | SS wall; mirror edging; light; fan; LCD; bell; tiles | Not specified | Not specified | Rs 3,375,000/unit × 4 = Rs 13,500,000 | 40/20/25/13/2 | 60 days | 6 months
Q052 | Structure quotation.pdf | 21/11/2025 | Structure only (for 2000 kg cargo) | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | 98×7×9 ft; 6"×3"/4"×2" (5 mm)/2"×2" (3 mm) MS; anti-rust primer | Not specified | PKR 2,800,000 | 100% advance | Not specified | Not specified
Q053 | Sunpo 2000kg.docx | 21/11/2025 | Cargo | 2000 kg | 6 | 6 | 1 m/s | M/S book type (local), 6 ft clear | MS sheet cabin + checker plate base | Not included | Not specified | PKR 5,500,000 | 50/35/15 | 60 days | 6 months
Q054 | Sunpo Quote.docx | 25/08/2025 (rev 27/08/2025) | Imported FUJI passenger | 1000 kg | 7 (spec) / 6 (type string) — Unclear | 7 / 6 — Unclear | 1.0 m/s | FUJI 2-panel center opening 800×2100 mm | FUJI HD-JX12 hairline SS; PVC flooring | Not specified (MR) | Not specified | Supply USD 29,200 (words; unit prices 15,050 + 14,150) | Supply 40/60; install 60/30/10 | 40 working days (supply) | 12 months
Q055 | Sunpo Revised Quotation.pdf | 25/08/2025 | Imported FUJI passenger + service | 1000 kg + 1600 kg | 7 | 7 | 1.0 m/s | FUJI 2-panel center opening (pass.); service: no doors | FUJI HD-JX12 hairline SS; PVC / checked plate | Not specified (MR) | Not specified | Supply USD 29,800 (15,500 + 14,300 as printed); install PKR 1,500,000 + 1,300,000 | Supply 40/60; install 60/30/10 | 40 working days (supply) | Unclear (garbled)
Q056 | Sunpo structure 2000kg.docx | 21/11/2025 | As Q029 | 2000 kg | 6 | 6 | 1 m/s | As Q029 | As Q029 | As Q029 (2,800,000) | Not specified | PKR 7,800,000 | As Q029 | 90 days | 6 months
Q057 | Tabish sb.docx | 20/05/2024 | As Q036 | 1000 kg | 7 | 7 | 1 m/s | As Q036 | As Q036 | Not specified | Glass in door | Rs 3,400,000 (no tax) | 30/20/25/20/5 | 60 days | 6 months (+ PKR 5,000/mo thereafter; parts 1 yr)
Q058 | V T S.docx | 16/April/2024 | Modernization (duplex conversion) | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | PKR 650,000 (+ PKR 200,000 ARD) | Advance | Not specified | Not specified
Q059 | Vijay Sukkur Contract.docx | 05/02/2024 | Passenger | 630 kg | 7 | 7 | 1 m/s | Hairline SS 800 mm; NBOL (China) | SS wall; mirror edging; TFT LCD; LCD landing; bell; false ceiling; tiles | Not specified | Not specified | Rs 3,500,000 | 40/25/20/13/2 | 60 days | 6 months
Q060 | Vijay Sukkur.docx | 05/02/2024 | As Q059 | 630 kg | 7 | 7 | 1 m/s | As Q059 | As Q059 | Not specified | Not specified | Rs 3,500,000 | 40/25/20/13/2 | 60 days | 6 months
Q061 | winch.docx | 06/04/2026 | Winch/girder arrangement | Not specified | Not specified | Not specified | Not specified | Not specified | Not specified | Side girders 5×10 (130 ft); center girder 6×12 ×2; trolleys; chain motors 2T ×2; cable; ceiling wire; labor | Not specified | Rs 2,150,000 | 100% advance | Not specified | Not specified

---

## 5. Quality Control

- **Completeness.** All 61 files (Q001–Q061) are represented in section 3 and in the section 4 summary table. Every entry has all 12 fields populated with either a value, "Not specified", or "Unclear" (no inferred data).
- **Verbatim transcription.** Prices, capacities, floors/stops, brands and printed wording were carried over without correction, including source quirks (e.g., "TFT LCD Display Cardboard", "Aebay Control", "Censor").
- **Ambiguity handling.** Where a document printed two conflicting figures (Q006 usage field, Q013/Q016 capacity, Q041/Q054 type-vs-spec floors/stops, Q050 words vs numeric amount, Q055 arithmetic oddities), both figures are reported and marked "Unclear".
- **Font/encoding control.** All DOCX extractions were lossless (XML text). PDF extractions used the embedded ToUnicode CMaps; 8 of 12 PDFs rendered fully; 4 PDFs (Q031, Q043, Q050, Q055) have garbled segments in the extraction that are flagged in their entries and marked "Unclear" where the figure could not be confirmed.
- **Integrity of source files.** SHA-256 hashes of all 61 source files were re-computed after extraction and match the baseline recorded at extraction start (61/61 match). No source quotation file was modified, renamed, moved, or deleted.
- **Scope containment.** Website/source code and all other project documentation were not modified. Only this file (`docs/quotation-extraction.md`) was created by this task.

---

## 6. Completion Report

- **Files processed:** 61 / 61 (49 DOCX + 12 PDF). IDs assigned Q001–Q061 (alphabetical by filename).
- **Fully extracted:** 57 / 61 (49 DOCX + 8 PDF).
- **Partially extracted:** 4 / 61 (PDFs with garbled segments — Q031 `P.O 02 QUOTATION.pdf`, Q043 `Quote SUNPO.pdf`, Q050 `shahrukh sb.pdf`, Q055 `Sunpo Revised Quotation.pdf`. Readable fields were transcribed; unreadable figures marked "Unclear").
- **Unreadable:** 0 / 61.
- **Duplicate / near-duplicate pairs (same content across two or more files):**
  - Q004 / Q005 (Complete Cargo Lift.pdf / Complete Cargo.docx) — identical.
  - Q006 / Q007 (Complete Passenger Lift.pdf / Complete Passenger.docx) — identical.
  - Q029 / Q030 / Q056 (P.O #01 REVISED QUOTE.pdf / P.O 01 QUOTATION.docx / Sunpo structure 2000kg.docx) — identical.
  - Q035 / Q040 (pharma.docx / Quotation.pdf) — identical.
  - Q036 / Q057 (Phs-8 Tabish sb.docx / Tabish sb.docx) — identical (Q057 additionally prints warranty/parts terms).
  - Q037 / Q038 (Qamar Mansha - 2.docx / Qamar Mansha.docx) — identical.
  - Q059 / Q060 (Vijay Sukkur Contract.docx / Vijay Sukkur.docx) — same quote, contract vs quotation renderings.
  - Q021 / Q022 (Lahore - Copy.docx / Lahore.docx) — identical.
  - Q017 / Q050 (iqbal.docx / shahrukh sb.pdf) — same passenger-lift quote, two formats.
  - Q031 / Q032 (P.O 02 QUOTATION.pdf / P.O 02.docx) — related but NOT identical (Q032 is the "REVISED 22/01/2026" edition with discount and cargo-only installation).
  - Q041 / Q054 / Q055 (QUOTATUIN.docx / Sunpo Quote.docx / Sunpo Revised Quotation.pdf) — FUJI Sunpo family; Q054 is the passenger-only column variant and Q055 the revised 7/7/7 pricing variant.
  - Q020 / Q043 (Sunpo imported lifts) — same scope printed on different letterheads (Excellent-issued vs Aayan-issued).
- **Extraction limitations:**
  1. PDF text layering is glyph-encoded; extraction depends on each font's ToUnicode CMap. Four PDFs contained segments that did not decode to legible text.
  2. Several documents were scanned/typed with inconsistent spelling and terminology; transcription preserves the printed form.
  3. Some documents print internal inconsistencies (conflicting capacity, floors/stops, or amount-in-words vs numeric) — no resolution was attempted; both figures are recorded.
  4. Completion/maintenance periods are stated per the printed text only; no interpretation or harmonization was applied.
- **Dataset status:** RAW QUOTATION EVIDENCE — ready to be referenced by later M2.5 pricing-calibration analysis. No averages, price-per-floor/kg figures, ranges, trends, formulas, rankings, or recommendations are included or derivable from this document alone.

---

File created: docs/quotation-extraction.md
Only docs/quotation-extraction.md was created/modified by this task.
Source quotation files unmodified (SHA-256 verified, 61/61).
No website/source code and no other project documentation modified.