import projectsDataHighlights from '@/data/projects/highlights'
import projectsDataApps from '@/data/projects/apps'
import projectsDataUni from '@/data/projects/uni'
import projectsDataOthers from '@/data/projects/others'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const projectData = [
    { title: 'Highlights', data: projectsDataHighlights },
    { title: 'Apps', data: projectsDataApps },
    { title: 'University', data: projectsDataUni },
    { title: 'Others', data: projectsDataOthers },
  ]
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            “Everyone needs a hobby.” - Tony Stark (Iron Man 3)
          </p>
        </div>
        <div className="space-y-2 pt-6 pb-6 md:space-y-5"></div>
      </div>
      {projectData.map((d) => (
        <div key={d.title}>
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            {d.title}
          </h2>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {d.data.map((e) => (
                <Card
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  imgSrc={e.imgSrc}
                  href={e.href}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
