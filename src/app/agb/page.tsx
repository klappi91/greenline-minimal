import type { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { PageLayout } from "@/components/page-layout";

export const metadata: Metadata = {
  title: "AGB",
};

export default function AGBPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <AnimateIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Rechtliches
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-foreground mb-16 md:mb-20">
            Allgemeine Liefer- und
            <br />
            Zahlungsbedingungen
          </h1>
        </AnimateIn>

        <div className="space-y-12 md:space-y-16">
          {/* Geltung */}
          <AnimateIn delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Geltung
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Unsere sämtlichen Lieferungen und Angebote erfolgen ausschließlich aufgrund dieser Allgemeinen Liefer- und Zahlungsbedingungen. Diese sind Bestandteil aller Verträge, die wir mit unseren Auftraggebern (nachfolgend kurz &bdquo;AG&ldquo; genannt) über die von uns angebotenen Waren schließen. Sie gelten auch für alle zukünftigen Lieferungen oder Angebote an den AG, selbst wenn sie nicht nochmals gesondert vereinbart werden.
                </p>
                <p>
                  Geschäftsbedingungen des AG finden keine Anwendung, auch wenn wir ihrer Geltung im Einzelfall nicht gesondert widersprechen. Selbst wenn wir auf ein Schreiben Bezug nehmen, welches Geschäftsbedingungen des AG enthält oder auf solche verweist, liegt darin kein Einverständnis mit der Geltung jener Geschäftsbedingungen.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Angebot und Vertragsabschluss */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Angebot und Vertragsabschluss
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Unsere sämtlichen Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind oder eine bestimmte Annahmefrist enthalten. Bestellungen oder Aufträge können wir innerhalb von 14 Tagen nach Zugang annehmen.
                </p>
                <p>
                  Ergänzungen und/oder Änderungen der getroffenen Vereinbarungen mit dem AG einschließlich dieser Allgemeinen Liefer- und Zahlungsbedingungen bedürfen zu ihrer Wirksamkeit der Schriftform. Mit Ausnahme von Geschäftsführern oder Prokuristen sind unsere Mitarbeiter nicht berechtigt, hiervon abweichende mündliche oder schriftliche Abreden zu treffen.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Preise und Zahlungen */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Preise und Zahlungen
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Die Preise gelten für den in den Auftragsbestätigungen oder gesonderten Verträgen aufgeführten Lieferumfang. Die Preise verstehen sich in Euro ab Werk zzgl. Verpackung, der gesetzlichen Umsatzsteuer, bei Exportlieferungen zzgl. Zoll sowie Gebühren und anderer öffentlicher Abgaben. Soweit den vereinbarten Preisen unsere Listenpreise zu Grunde liegen und die Lieferung erst mehr als einen Monat nach Vertragsabschluss erfolgen soll, gelten die bei Lieferung gültigen Listenpreise.
                </p>
                <p>
                  Sofern nichts anderes schriftlich vereinbart wurde, ist der Kaufpreis ohne Abzug sofort mit Eingang der Rechnung zur Zahlung fällig.
                </p>
                <p>
                  Der AG kommt auch ohne unsere Mahnung in Verzug, wenn er den Kaufpreis nicht innerhalb von 30 Tagen nach Fälligkeit und Zugang der Rechnung oder einer gleichwertigen Zahlungsaufstellung zahlt. Gerät der AG mit einer Zahlung in Verzug, sind wir berechtigt, für den Verzugszeitraum Zinsen in Höhe von 8 Prozentpunkten über dem jeweiligen Basiszinssatz gemäß § 247 BGB geltend zu machen. Dieser Zinsaufschlag gilt jedoch nur, soweit der AG ein gewerblicher Kunde ist. Ist der AG ein privater Endverbraucher, behalten wir uns vor, für den Verzugszeitraum Zinsen in Höhe von 5 Prozentpunkten über dem jeweiligen Basiszinssatz gemäß § 247 BGB geltend zu machen. Der Nachweis eines höheren Schadens durch uns bleibt vorbehalten.
                </p>
                <p>
                  Zahlt der AG fällige Rechnungen nicht oder werden uns andere Umstände bekannt, welche auf eine wesentliche Verschlechterung der Vermögensverhältnisse des AG nach Vertragsabschluss schließen lassen, sind wir berechtigt, alle unsere Forderungen gegen den AG sofort fällig zu stellen. Die Aufrechnung mit Gegenansprüchen des AG oder die Zurückbehaltung von Zahlungen wegen solcher Ansprüche ist nur zulässig, soweit die Gegenansprüche durch uns unbestritten oder rechtskräftig festgestellt sind.
                </p>
                <p>
                  Wir sind berechtigt, noch ausstehende Lieferungen oder Leistungen nur gegen Vorauszahlung oder Sicherheitsleistung auszuführen oder zu erbringen, wenn uns nach Abschluss des Vertrages Umstände bekannt werden, welche die Kreditwürdigkeit des AG wesentlich zu mindern geeignet sind und durch welche die Bezahlung unserer offenen Forderungen durch den AG aus dem jeweiligen Vertragsverhältnis gefährdet wird.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Lieferung und Lieferzeit */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Lieferung und Lieferzeit
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Lieferungen erfolgen ab Werk, sofern nicht ausdrücklich etwas Abweichendes vereinbart wird. Bei Lieferungen ab Werk geht die Gefahr des zufälligen Untergangs und der Verschlechterung der Ware mit Mitteilung der Bereitstellung auf den AG über.
                </p>
                <p>
                  Von uns in Aussicht gestellte Fristen und Termine für Lieferungen gelten stets nur annähernd, es sei denn, dass ausdrücklich eine feste Frist oder ein fester Termin zugesagt oder vereinbart ist. Sofern eine Versendung vereinbart wurde, beziehen sich Lieferfristen und Liefertermine auf den Zeitpunkt der Übergabe an den Spediteur, Frachtführer oder an einen sonst mit dem Transport beauftragten Dritten.
                </p>
                <p>
                  Wir haften nicht für Unmöglichkeit der Lieferung oder für Lieferverzögerung, soweit diese durch höhere Gewalt oder sonstige, zum Zeitpunkt des Vertragsabschlusses nicht vorhersehbare Ereignisse verursacht worden sind und die wir nicht zu vertreten haben. Sofern solche Ereignisse uns die Lieferung oder Leistung wesentlich erschweren oder unmöglich machen und die Behinderung nicht nur von vorübergehender Dauer sind, sind wir zum Rücktritt vom Vertrag berechtigt. Bei Hindernissen vorübergehender Dauer verlängern sich die Lieferfristen oder verschieben sich die Liefertermine um den Zeitraum der Behinderung zzgl. einer angemessenen Anlauffrist.
                </p>
                <p>
                  Wir sind zu Teillieferungen berechtigt, sofern der AG nicht begründete Einwände hiergegen vorbringen kann. Erfolgt eine Lieferung in Leihbehältern, so sind diese innerhalb von 60 Tagen nach Erhalt der Lieferung vollständig entleert, gereinigt und frachtfrei an uns zurückzusenden. Verlust und Beschädigungen von Leihbehältern gehen zu Lasten des AG. Einwegverpackungen werden von uns nicht zurückgenommen; stattdessen können wir dem AG auf Wunsch einen Dritten benennen, der die Verpackung entsprechend der Verpackungsverordnung recycelt.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Gewährleistung / Haftung */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Gewährleistung / Haftung
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Unsere Ware wird in handelsüblicher Beschaffenheit geliefert. Geringfügige Farbabweichungen sind produktionsbedingt und bilden keinen Grund zur Mängelrüge.
                </p>
                <p>
                  Eine anwendungstechnische Empfehlung erfolgt ohne Rechtsverbindlichkeit. Sie entbindet den AG nicht von einer eigenverantwortlichen Prüfung der Eignung unserer Waren für die von dem AG beabsichtigte Verwendung, soweit sich nicht aus unseren Warenangaben etwas anderes ergibt.
                </p>
                <p>
                  Der AG hat die empfangene Ware im Rahmen der durchzuführenden Wareneingangskontrolle auf Vollständigkeit, Transportschäden, offensichtliche Mängel, Beschaffenheit und deren Eigenschaften zu untersuchen. Offene Sachmängel, Falschlieferungen und Mengenabweichungen sind uns unverzüglich, spätestens jedoch binnen zwei Wochen nach Lieferung schriftlich anzuzeigen. Transportschäden sowie versteckte Mängel sind uns spätestens drei Tage nach Entgegennahme unserer Lieferung schriftlich mitzuteilen.
                </p>
                <p>
                  Soweit ein von uns zu vertretender Mangel vorliegt und wir rechtzeitig von dem AG eine schriftliche Rüge erhalten haben, sind wir – unter Ausschluss der Rechte des AG von dem Vertrag zurückzutreten oder den Kaufpreis herabzusetzen – zur Nacherfüllung verpflichtet, es sei denn, dass wir aufgrund der gesetzlichen Regelung zur Verweigerung der Nacherfüllung berechtigt sind.
                </p>
                <p>
                  Eine erforderliche Nacherfüllung kann je nach unserer Wahl durch Beseitigung des Mangels oder Lieferung einer neuen Ware erfolgen. Während der Nacherfüllung sind die Herabsetzung des Kaufpreises oder der Rücktritt vom Vertrag durch den AG ausgeschlossen. Schadensersatzansprüche nach Maßgabe der nachfolgenden Bedingungen wegen eines Mangels kann der Käufer erst geltend machen, wenn die Nacherfüllung fehlgeschlagen ist oder wir die Nacherfüllung verweigern. Das Recht des Käufers zur Geltendmachung von weitergehenden Schadensersatzansprüchen zu den nachfolgenden Bedingungen bleibt davon unberührt.
                </p>
                <p>
                  Falls wir schuldhaft eine ausdrückliche vereinbarte Frist nicht einhalten können oder aus sonstigen Gründen in Verzug geraten, hat uns der Käufer eine angemessene Nachfrist zu gewähren. Nach fruchtlosem Ablauf dieser Frist ist der Käufer berechtigt, vom Vertrag zurückzutreten.
                </p>
                <p>
                  Wir haften nach den gesetzlichen Bestimmungen vorbehaltlich der nachfolgenden Begrenzungen, wenn es sich bei dem Vertrag um ein Fixgeschäft handelt oder der Käufer infolge eines von uns zu vertretenden Lieferverzugs berechtigt ist, sich auf den Wegfall seines Interesses an der Vertragserfüllung zu berufen. Wir haften weiter bei Lieferverzug nach den gesetzlichen Bestimmungen, wenn der Lieferverzug auf einer von uns zu vertretenden vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruht. Beruht der Lieferverzug nicht auf einer von uns zu vertretenden vorsätzlichen oder grob fahrlässigen Vertragsverletzung, ist unsere Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt. Beruht ein von uns zu vertretender Lieferverzug auf der schuldhaften Verletzung einer wesentlichen Vertragspflicht, haften wir nach den gesetzlichen Bestimmungen, wobei unsere Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt ist.
                </p>
                <p>
                  Wir haften unbeschadet der vorstehenden Regelungen und der nachfolgenden Haftungsbeschränkungen uneingeschränkt für Schäden an Leben, Körper und Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung von uns, unseren gesetzlichen Vertretern oder unseren Erfüllungsgehilfen beruhen, sowie für Schäden, die von der Haftung nach dem Produkthaftungsgesetz umfasst werden, sowie für alle Schäden, die auf vorsätzlichen oder grob fahrlässigen Vertragsverletzungen von uns, unseren gesetzlichen Vertretern oder unseren Erfüllungsgehilfen beruhen. Soweit wir bezüglich der Ware oder Teile derselben eine Beschaffenheits- und/oder Haltbarkeitsgarantie abgegeben haben, haften wir auch für die Garantiezusagen. Für Schäden, die auf dem Fehlen der garantierten Beschaffenheit oder Haltbarkeit beruhen, aber nicht unmittelbar an der Ware eintreten, haften wir allerdings nur dann, wenn das Risiko eines solchen Schadens ersichtlich von der Beschaffenheits- und Haltbarkeitsgarantie erfasst ist.
                </p>
                <p>
                  Wir haften für Schäden, die durch einfache Fahrlässigkeit verursacht werden, soweit diese Fahrlässigkeit die Verletzung solcher Vertragspflichten betrifft, deren Einhaltung für die Erreichung des Vertragszwecks von besonderer Bedeutung ist. Wir haften jedoch nur, soweit die Schäden in typischer Weise mit dem Vertrag verbunden und für uns vorhersehbar sind. Bei einfachen fahrlässigen Verletzungen nicht vertragswesentlicher Nebenpflichten haften wir nicht. Die in den Sätzen 1 – 3 enthaltenen Haftungsbeschränkungen gelten auch, soweit die Haftung für die gesetzlichen Vertreter, leitenden Angestellten und sonstigen Erfüllungsgehilfen von uns betroffen ist.
                </p>
                <p>
                  Eine weitergehende Haftung ist ohne Rücksicht auf die Rechtsnatur des geltend gemacht Anspruchs ausgeschlossen. Soweit unsere Haftung ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung unserer Angestellten, Arbeitnehmer, Mitarbeiter, Vertreter und Erfüllungsgehilfen.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Eigentumsvorbehalt */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Eigentumsvorbehalt
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Die von uns gelieferte Ware bleibt bis zur vollständigen Bezahlung aller gesicherten Forderungen unser Eigentum. Die Ware sowie die nach dieser Klausel an ihre Stelle tretende, vom Eigentumsvorbehalt erfasste Ware wird nachfolgend Vorbehaltsware genannt.
                </p>
                <p>
                  Der AG verwahrt die Vorbehaltsware unentgeltlich für uns.
                </p>
                <p>
                  Der AG ist berechtigt, die Vorbehaltsware bis zum Eintritt des Verwertungsfalls im ordnungsgemäßen Geschäftsverkehr zu verarbeiten oder zu veräußern. Verpfändungen und Sicherungsübereignungen sind unzulässig.
                </p>
                <p>
                  Wird die Vorbehaltsware vom AG verarbeitet, so wird vereinbart, dass die Verarbeitung im Namen und für Rechnung von uns erfolgt und wir unmittelbar das Eigentum oder – wenn die Verarbeitung aus Stoffen mehrerer Eigentümer erfolgt oder der Wert der verarbeiteten Sache höher ist als der Wert der Vorbehaltsware – das Miteigentum an der neu geschaffenen Sache im Verhältnis des Werts der Vorbehaltsware zum Wert der neu geschaffenen Sache erwerben. Für den Fall, dass kein solcher Eigentumserwerb beim AG eintreten sollte, überträgt der AG an uns bereits jetzt sein künftiges Eigentum oder – im o.g. Verhältnis – Miteigentum an der neu geschaffenen Sache zur Sicherheit. Wird die Vorbehaltsware mit anderen Sachen zu einer einheitlichen Sache verbunden oder untrennbar vermischt und ist eine der anderen Sachen als Hauptsache anzusehen, so überträgt uns der AG, soweit die Hauptsache ihm gehört, dem AG anteilig das Miteigentum an der einheitlichen Sache in dem in Satz 1 genannten Verhältnis.
                </p>
                <p>
                  Im Fall der Weiterveräußerung der Vorbehaltsware tritt der Käufer bereits jetzt sicherungshalber die hieraus entstehende Forderung gegen uns – bei Miteigentum an der Vorbehaltsware anteilig entsprechend dem Miteigentumsanteil – an uns ab. Gleiches gilt für sonstige Forderungen, die an die Stelle der Vorbehaltsware treten oder sonst hinsichtlich der Vorbehaltsware entstehen, wie z.B. Versicherungsansprüche oder Ansprüche aus unerlaubter Handlung bei Verlust oder Zerstörung. Wir ermächtigen den AG widerruflich, die an uns abgetretenen Forderungen im eigenen Namen einzuziehen.
                </p>
                <p>
                  Greifen Dritte auf die Vorbehaltsware zu, insbesondere durch Pfändung, wird der AG sie unverzüglich auf unser Eigentum hinweisen und uns hierüber informieren, um uns die Durchsetzung unserer Eigentumsrechte zu ermöglichen. Sofern der Dritte nicht in der Lage ist, uns die in diesem Zusammenhang entstehenden gerichtlichen oder außergerichtlichen Kosten zu erstatten, haftet hierfür der AG.
                </p>
                <p>
                  Wir werden die Vorbehaltsware sowie die an ihre Stelle tretenden Sachen oder Forderungen auf Verlangen nach Wahl des AG freigeben, soweit ihr Wert die Höhe der gesicherten Forderungen um mehr als 50% übersteigt.
                </p>
                <p>
                  Treten wir bei vertragswidrigem Verhalten des AG – insbesondere Zahlungsverzug – vom Vertrag zurück (Verwertungsfall), sind wir berechtigt, die Vorbehaltsware herauszuverlangen.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Gerichtsstand / Rechtswahl */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Gerichtsstand / Rechtswahl
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Gerichtsstand für alle etwaigen Streitigkeiten aus der Geschäftsbeziehung zwischen uns und dem AG ist nach Wahl von uns Westerstede oder der Sitz des AG. Für Klagen gegen uns ist Westerstede ausschließlicher Gerichtsstand.
                </p>
                <p>
                  Es gilt das Recht der Bundesrepublik Deutschland mit Ausnahme des UN-Übereinkommen über Verträge über den internationalen Warenkauf (CISG).
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Allgemeines */}
          <AnimateIn>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-foreground">
                Allgemeines
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed text-foreground/70">
                <p>
                  Änderungen und/oder Ergänzungen des Vertrages einschließlich der Schriftformklausel bedürfen zu ihrer Wirksamkeit der Schriftform. Sollte eine Bestimmung dieses Vertrages rechtsunwirksam und/oder undurchführbar sein oder werden, oder sollte sich in diesem Vertrag eine Lücke herausstellen, wird infolgedessen die Rechtswirksamkeit der übrigen Bestimmungen dieses Vertrags nicht berührt, soweit nicht in diesem Vertrag ausdrücklich etwas anderes geregelt ist. Anstelle der rechtsunwirksamen und/oder undurchführbaren Vereinbarung oder zur Ausfüllung der Lücke werden die Vertragsparteien eine Regelung treffen, die, soweit rechtlich zulässig, dem am nächsten kommt, was die Vertragsparteien wirtschaftlich gewollt haben oder nach dem Sinn und Zweck dieses Vertrages gewollt hätten, sofern sie den entsprechenden Punkt bedacht hätten.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </PageLayout>
  );
}
