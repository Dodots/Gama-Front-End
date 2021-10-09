import { useState, useEffect, useCallback } from 'react';
import HeaderComponent from '../../components/HeaderComponent'
import FooterComponent from '../../components/FooterComponent';

import { apiLocal } from '../../services/api'

import { CoursesContent, ContactSection, ContentLayout } from './style';
import ImgIlustration from '../../assets/img/ead.jpeg'

function Courses() {
  const [courses, setCourses] = useState([])
  const [data, setData] = useState({})
  const [submited, setSubmited] = useState(false)

  useEffect(() => {
    apiLocal.get('courses').then(
      response => {
        setCourses(response.data)
        console.log(response.data)
      }
    )
  }, [])

  const leadSubmit = useCallback((e) => {
    e.preventDefault();
    apiLocal.post('leads', data).then(
      response => {
        if (response.status === 201) setSubmited(true)
      }
    )
  }, [data]);


  return (
    <>
      <HeaderComponent />
      <ContentLayout>

        <div>
          <h1>Cursos disponíveis</h1>
        </div>
        <CoursesContent>
          {courses.map(course => (
            <div key={course.id} className="card-course">
              <img src={course.img} alt={course.name} />
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </ CoursesContent>
        <ContactSection>
          <div>
            <h1>Formulário</h1>
          </div>
          <div className="section">
            {!submited ? (
              <>
                <form onSubmit={leadSubmit}>
                  <input
                    type="text"
                    placeholder="Informe seu nome"
                    onChange={e => setData({...data, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Informe seu email"
                    onChange={e => setData({...data, email: e.target.value })}
                  />
                  <select
                    onChange={e => setData({...data, course: e.target.value })}
                  >
                    {courses.map(course => (
                      <option key={course.id} value={course.name}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Deseja complementar sua inscrição"
                    onChange={e => setData({...data, details: e.target.value })}
                  />
                  <input type="submit" value="Cadastrar" />

                </form>
                <img src={ImgIlustration} alt="faça sua inscrição" />
              </>
            ) : (
              <>
                <div>
                  <h1> Sua inscrição foi rtealizada com sucesso!</h1>
                </div>
              </>
            )}

          </div>
        </ContactSection>
      </ContentLayout>
      <FooterComponent />
    </>
  );
}

export default Courses;