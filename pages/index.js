import BaseHead from '../src/components/base/BaseHead'
import ImageSequenceTop from '../src/components/contents/Main/ImageSequenceTop'
import Type from '../src/components/contents/Main/Type'

const Page = () => {
  return (
      <>
        <BaseHead title="Home" />
        <Type/>
        <ImageSequenceTop/>
      </>
  )
}

export default Page;