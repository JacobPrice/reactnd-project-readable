/* eslint react/prop-types: 0 */
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'

export default ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css' />
      </Head>
      <div className='ui basic segment'>
        <nav>
          <Link><a>Navigate</a></Link>
        </nav>
        <div className='ui text container'>
          { children }
        </div>
      </div>
    </div>
  )
}
