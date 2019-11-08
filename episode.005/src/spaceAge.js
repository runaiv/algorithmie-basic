export default function spaceAge(planet, number) {
    
    switch(planet) {
        case 'Earth':
          // code block
          let e = number / 31557600
          return Math.round(e * 100) / 100
          break;
        case 'Mercury':
          // code block
          e = number / 31557600
          let m = e / 0.2408467
          console.log(Math.round(m *100) / 100)
          return Math.round(m *100) / 100 
          break;
        default:
          // code block
      }
}