import './styles.css'
import { products } from './json'
import { ShoppingCart } from './components/shoppingCart/shoppingCart'
import { PageHeader } from './components/pageHeader/pageHeader'
import { CategoryFilter } from './components/categoryFilter/categoryFilter'
import { Filters } from './components/filters/filters'
import { SortSection } from './components/sortSection/sortSection'
import { Store } from './components/store/store'
import { StoreItem } from './components/storeItem/storeItem'
import { Pagination } from './components/pagination/pagination'
import { PageFooter } from './components/pageFooter/pageFooter'

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

const store = new Store();
store.hi();

const storeItem = new StoreItem();
storeItem.hi();

const pagination = new Pagination();
pagination.hi();

const footer = new PageFooter();
footer.hi();