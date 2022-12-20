import './styles.css'
import { products } from './json'
import { ShoppingCart } from './components/shoppingCart/shoppingCart'
import { PageHeader } from './components/pageHeader/pageHeader'
import { CategoryFilter } from './components/categoryFilter/categoryFilter'
import { Filters } from './components/filters/filters'
import { SortSection } from './components/sortSection/sortSection'

const shopping  = new ShoppingCart();
shopping.hi()

const header = new PageHeader();
header.hi();

const categoryFilter = new CategoryFilter();
categoryFilter.hi();

const filters = new Filters();
filters.hi();

const sort = new SortSection();
sort.hi();