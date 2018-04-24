import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index'


loadLanguages(['stylus', 'twig', 'json'])
Prism.highlightAll()

export default Prism
