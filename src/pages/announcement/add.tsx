// Utils-related imports

// Types and constants
import type { FC } from 'react'
// UI-related imports
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'

import { AnnouncementForm } from '~/components/AnnouncementForm'
import type { CreateAnnouncementInput } from '~/generated-types'

const CreateAnnouncement: FC = () => {
  const { t } = useTranslation('announcement')
  const initialValues: CreateAnnouncementInput = {
    content: {
      en: '',
      th: '',
    },
    images: [],
    location: {
      lat: undefined,
      lng: undefined,
    },
    metadata: {
      email: null,
      line: null,
      phone: null,
    },
    place: '',
    tags: [],
    title: {
      en: '',
      th: '',
    },
  }
  return (
    <div>
      <div className="mb-6 flex items-center space-x-2">
        <a href="/announcement" className="no-underline">
          <div className="text-title-l text-french-vanilla-500 hover:text-magenta-600">
            {t('manage')}
          </div>
        </a>
        <Icon
          icon="ic:round-arrow-forward-ios"
          className="text-french-vanilla-500 h-6 w-6"
        />
        <div className="text-title-l text-magenta-500">{t('add')}</div>
      </div>
      <AnnouncementForm
        title={t('add')}
        description={t('add_description')}
        initialValues={initialValues}
        saveAsDraft
        publish
      />
    </div>
  )
}

export default CreateAnnouncement
