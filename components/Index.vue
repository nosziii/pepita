<template>
  <div>
    <h1>Pro Kontra</h1>
    <table class="table">
      <thead>
      <tr>
        <th>Keretrendszer/Könyvtár</th>
        <th>Pro</th>
        <th>Kontra</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>React</td>
        <td>Nagy közösség, gazdag ökoszisztéma, komponens-alapú, rugalmas</td>
        <td>Csak UI réteg, kiegészítő könyvtárakra szükség lehet</td>
      </tr>
      <tr>
        <td>Vue.js</td>
        <td>Könnyen tanulható, tiszta szintaxis, reaktív, integrálható</td>
        <td>Kisebb közösség, kevesebb forrás</td>
      </tr>
      <tr>
        <td>Angular</td>
        <td>Teljes körű megoldás, erős típusosság, ideális nagy projektekhez</td>
        <td>Magas tanulási görbe, bonyolultabb beállítások</td>
      </tr>
      <tr>
        <td>Svelte</td>
        <td>Könnyű tanulni, kiváló teljesítmény, innovatív</td>
        <td>Kisebb közösség, kevés kiegészítő</td>
      </tr>
      <tr>
        <td>Ember.js</td>
        <td>Konvenciókat követő teljes körű megoldás</td>
        <td>Kisebb közösség, kevésbé népszerű új projektekben</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "indexComponent"
}
</script>

<style scoped>

</style>
