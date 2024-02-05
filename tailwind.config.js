/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    colors: {
      'blue':'#19335A',
      'purple':'#49175C',
      'green': '#006A74',
      'white': '#F4F4F4',
      'orange': '#DC602E',
      'darkBlue': '#003863',
      'transGray': '#12121278',
      'black':'#000000',
      },
    extend: {
      fontFamily: {
        'raleway':["raleway", 'sans-serif']
      },
      backgroundImage: {
        'blueRight': "url('/assets/bg-images/bg-blue-right.svg')",
        'purpleBottom': "url('/assets/bg-images/bg-purple-bottom.svg')",
        'greenLeft':  "url('/assets/bg-images/bg-green-left.svg')",
        'whiteRight': "url('/assets/bg-images/bg-white-right.svg')",
        'orangeLeft': "url('/assets/bg-images/bg-orange-left.svg')",
        'footer': "url('/assets/bg-images/bg-footer.svg')"
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(25)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeUp 0.8s ease-in-out'
      }
    },
    container: {
      center: true,
      padding: '20px'
    },
    content: {
      'arrow': "url('/assets/arrow.svg')",
      'squareIcon': "url('/assets/square-icon.svg')"
    }
  },
  plugins: [    
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

