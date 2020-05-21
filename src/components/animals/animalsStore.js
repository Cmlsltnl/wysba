const DEFAULT_STATE = {
  data: [
    { name: 'erkək südlük inək balası', lifespan: '20 il', slaughter: '1-24 həftə', ratio: 1.25, key: 'malecalve' },
    { name: 'ət üçün istifadə olunan inəklər', lifespan: '20 il', slaughter: '18 ay', ratio: 7.5, key: 'cow' },
    { name: 'erkək inkubator cücələri', lifespan: '8 il', slaughter: '1 gün', ratio: 0.0003, key: 'malechick' },
    { name: 'quzular', lifespan: '12 il', slaughter: '6-8 ay', ratio: 4.20, key: 'lamb' },
    { name: 'yumurta üçün istifadə olunan toyuqlar', lifespan: '8 il', slaughter: '1-2 il', ratio: 18.75, key: 'eggchicken' },
    { name: 'hindquşları', lifespan: '15 il', slaughter: '5 ay', ratio: 2.78, key: 'turkey' },
    { name: 'süd üçün istifadə olunan inəklər', lifespan: '20 il', slaughter: '5 il', ratio: 25, key: 'milkcow' },
    { name: 'ət üçün istifadə olunan toyuqlar', lifespan: '8 il', slaughter: '6 həftə', ratio: 1.5625, key: 'meatchicken' },
  ],
}
const reducer = (state = DEFAULT_STATE) => state

export { reducer }
