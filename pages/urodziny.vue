<template>
  <div class="site container birthday">
    <SectionTitle subtitle="Artystycznie, Kreatywnie, Zdrowo" title="Uroczyste Urodziny" />
    <div class="content">
      <ContentWithImage filename="/gallery/8D1A0107.jpg">
        <h3>Wybierz warsztaty:</h3>
        <ul>
          <li>Pracownia ceramiki - zabawa w glinie*</li>
          <li>Pracownia malarska - malowanie sztalugowe na płótnie 50x70 cm z wykorzystaniem techniki akrylowej lub malowanie akwarelowe na specjalnym papierze</li>
          <li>Ebru - malowanie na wodzie</li>
          <li>Maly architekt - wspólne budowanie makiety**</li>
          <li>Mydlarnia - tworzenie mydełek glicerynowych z użyciem kolorów, zapachów oraz form</li>
          <li>Pracownia bizuterii - projektowanie i tworzenie biżuterii z użyciem masy samoutwardzalnej</li>
          <li>Drukarnia - zaprojektowanie i własnoręczne wykonanie matrycy techniką graficzną (linoryt lub monotypia) oraz przeniesienie wzoru na torbę bawełnianą</li>
          <li>Pracownia obróbki wełny - filcowanie na sucho lub mokro***</li>
          <li>Pracownia form przestrzennych - origami</li>
          <li>Pracownia hafciarki - haft metodą punch needle</li>
        </ul>
        * W cenie jest jednokrotny wypał na tzw. bisquit (utwardzonej formy) do odbioru w ustalonym terminie.<br>
        ** W przypadku warsztatów "Maly architekt" powstaje jedna makieta dla solenizanta, pozostali uczestnicy zabierają wykonaną przez siebie pracę do domu.<br>
        *** Wybór techniki zależy od wieku uczestników.
      </ContentWithImage>
      <ContentWithImage reverse filename="/gallery/8D1A9909.jpg">
        <h3>Cena i dodatkowe informacje:</h3>
        <p>
          Cena: 550 zł dla 6 osób wraz z solenizantem.<br>
          Cena: 690 zł dla 10 osób wraz z solenizantem, powyżej 10 osób + 55 zł/kolejny uczestnik.<br>
          Dla dzieci od 4 roku życia.<br>
        </p>

        <h3>W cenie:</h3>
        <ul>
          <li>Uczestnictwo w warsztatach</li>
          <li>Opieka prowadzącego przez cały czas trwania warsztatów</li>
          <li>Udostępnienie sali po warsztatach</li>
          <li>Przekąski: owoce, chrupki kukurydziane, wafelki ryżowe, chipsy jabłkowe, paluszki, bakalie, drobne ciasteczka</li>
          <li>Gorąca czekolada z bitą śmietaną i piankami marshmallow lub deser lodowy dla każdego uczestnika</li>
          <li>Napoje bez limitu w dzbankach: woda, lemoniada</li>
          <li>Rezerwacja stolika w kawiarni dla dorosłych gości + woda bez limitu</li>
        </ul>

        <h3>Dodatkowe opcje:</h3>
        <ul>
          <li>Ciasta/torty - możliwość zamówienia ciasta w kawałkach</li>
          <li>Wniesienie własnego tortu/ciasta za opłatą 40 zł</li>
          <li>Świeżo wyciskany sok</li>
          <li>Sok z kartonu</li>
          <li>Herbata zimowa w dzbanku</li>
          <li>Duże panini z pesto rosso, serem i szynką oraz warzywami</li>
          <li>Tosty z serem i szynką</li>
          <li>20% zniżka na kawę/herbatę dla dorosłych gości</li>
        </ul>
      </ContentWithImage>
    </div>
  </div>
</template>

<script>
import ContentWithImage from '../components/ContentWithImage.vue'

export default {
  name: 'Urodziny',
  components: { ContentWithImage }
}
</script>
