import './App.css'
import Header from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Card } from './components/Card'
import { Contador } from './components/Contador'
import ContactForm from './components/ContactForm'
import ProductList from './components/ProductList'
import TodoApp from './components/TodoApp'
function App() {

  return (
    <>
      <Header></Header>
      <Main>
        {/* <Card title="Producto 1" 
        description="Descripción del producto 1" 
        imagen="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=cropruta/a/imagen1.jpg" 
        precio="$19.99"/> */}
        <Contador />
        <ContactForm></ContactForm>
        <ProductList></ProductList>
        <TodoApp></TodoApp>
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
