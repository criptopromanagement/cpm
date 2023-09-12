import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import type { Post } from '../types/blog';

const now = new Date();

class BlogApi {
  getPosts(): Promise<Post[]> {
    const posts: Post[] = [
      {
        id: 'finanzas-descentralizadas',
        author: {
          avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
          name: 'Mauricio Luduenia'
        },
        category: 'Criptomonedas',
        cover: '/static/blog/defi.png',
        publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
        readTime: '5 min',
        shortDescription: 'Dentro del ecosistema crypto, seguramente escuchaste hablar de DeFi. DeFi significa Finanzas Descentralizadas. Algo así como Wall Street sobre blockchain, pero con más transparencia. Las instituciones financieras como bancos, fondos y brokers nos ofrecen diferentes productos; algunos los usamos todos los días.',
        title: 'Finanzas Descentralizadas'
      },
      {
        id: 'ethereum-una-computadora-mundial',
        author: {
          avatar: '/static/mock-images/avatars/avatar-omar_darboe.png',
          name: 'CPM'
        },
        category: 'Criptomonedas',
        cover: '/static/blog/ethereum.png',
        publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
        readTime: '6 min',
        shortDescription: 'No sería exagerado comparar Ethereum con internet, con un estado o con una gran organización.Conecta usuarios en todo el mundo, tiene sus propias reglas, y en su sistema corren aplicaciones de servicios financieros con más de 80.000 millones de dólares en activos.',
        title: 'Ethereum. Una computadora mundial'
      }
    ];

    return Promise.resolve(posts);
  }

  getPost(): Promise<Post> {
    const post: Post = {
      id: '24b76cac9a128cd949747080',
      author: {
        avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
        name: 'CPM'
      },
      category: 'Criptomonedas',
      content: `
## INTRODUCCIÓN
Cualquier persona con una cuenta bancaria conoce lo engorroso que es el sistema a la hora de realizar algún trámite. 

Algunos trámites todavía son personales y la gran mayoría son idénticos, rutinarios, automatizables y que hace años deberían estar completamente digitalizados.

Cada vez que entramos a un banco, sentimos que el tiempo se detuvo en el año 2000. Igual que algunas de sus aplicaciones móviles.

Por falta de incentivos y de necesidad, estas instituciones nunca tuvieron la motivación para innovar, mejorar el servicio y entregar más valor a sus clientes.

Pensemos en los servicios más básicos de los bancos. Custodiar los ahorros, cambiar o vender divisas extranjeras, brindar rentabilidad por los depósitos inmovilizados, y eventualmente recibir un crédito. Fin.

Muchos de los productos que ofrecen estas instituciones ya están disponibles sin la necesidad de trámites burocráticos, ir físicamente hasta algún edificio, ni vivir en determinado país. De esto se tratan las finanzas descentralizadas y es lo que
analizaremos en este trabajo.

Este reporte busca en primer lugar dar a conocer qué son y de qué manera vienen a mejorar nuestra vida, como toda tecnología. En segundo lugar, busca explicar cómo se logra quitar del medio a instituciones que llevan más de 5
siglos intermediando, y aportando cada vez menos valor en un mundo que tiende a la digitalización total.

También veremos cómo ha sido el crecimiento de la industria en los últimos años y cómo luce de cara al futuro, dónde están las oportunidades y cuáles son sus riesgos.

## PRIMEROS CONCEPTOS

¿QUE ES DEFI?
Cuando hablamos de finanzas descentralizadas o DeFi (Decentralized Finance), como se lo conoce mundialmente, hacemos alusión a un ecosistema. Un ecosistema, en biología, se compone por variedades de especies de organismos vivos y las relaciones e interdependencias entre ellos dentro del entorno físico que comparten.

De esta manera cuando hablamos de DeFi hacemos alusión a un conjunto de componentes que interactúan entre sí y comparten ciertos entornos en común.

Los elementos más comunes que encontramos son activos digitales o tokens, contratos inteligentes, protocolos, aplicaciones descentralizadas(DApps) y cadenas de bloques o blockchains.

Todos estos componentes conforman una infraestructura orientada a la generación y administración de tokens. Como dichos tokens, tienen valor (por la utilidad que tienen como veremos más adelante) y un precio en el mercado, resultan en un gran ecosistema financiero, que replica muchos de los servicios y productos tradicionales, pero de una manera abierta y transparente; y a la vez se crean nuevos servicios y productos. En DeFi se busca evitar los intermediarios y las instituciones centralizadas con el objetivo de eficientizar los procesos y brindar un acceso equitativo y global.

Datos: Según el último reporte del banco mundial (2017), el 31% de la población mundial adulta no tiene cuenta en ninguna institución financiera, por lo tanto tampoco a ningún servicio de ahorro, acceso al crédito, cobro y pago a distancia, 04 etc. En las economías en desarrollo este número llega al 37%. Esto significa que 1,7 mil millones de personas están fuera del sistema financiero, es decir sin cuenta en instituciones financieras ni acceso a proveedores de pago digitales. 

Sin embargo, dos tercios de las personas no bancarizadas cuentan con teléfono móvil.
`,
      cover: '/static/blog/defi.png',
      publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
      readTime: '5 min',
      shortDescription: 'Dentro del ecosistema crypto, seguramente escuchaste hablar de DeFi. DeFi significa Finanzas Descentralizadas. Algo así como Wall Street sobre blockchain, pero con más transparencia. Las instituciones financieras como bancos, fondos y brokers nos ofrecen diferentes productos; algunos los usamos todos los días.',
      title: 'Finanzas Descentralizadas'
    };

    return Promise.resolve(post);
  }
}

export const blogApi = new BlogApi();
