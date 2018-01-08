package hello.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import hello.model.Student;
import hello.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)/*for  avoid error Access-Control-Allow-Origin in angular
Cross-origin resource sharing (CORS)

*/
@Configuration
@RestController
@RequestMapping("/student")
public class StudentController{
/***************************************************************/
    @Autowired
    private StudentRepository studentRepo;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Student>> getStudents() {
        return new ResponseEntity<>(studentRepo.findAll(), HttpStatus.OK);
    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getStudent(@PathVariable long id) {
        return  studentRepo.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ArrayList<Student> deleteStudent(@PathVariable long id) {
        Student student = students.stream().filter(s ->s.getId() == id).collect(Collectors.toList()).get(0);
        students.remove(student);
        return  students;
    }
    @RequestMapping( method = RequestMethod.POST)
    public ArrayList<Student> createStudent(@RequestBody Student student) {
        students.add(student);
        return  students;
    }










/*
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getStudent(@PathVariable long id) {
        return  studentRepo.findOne(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<Student> getAllStudents(){
            return (ArrayList<Student>) studentRepo.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ArrayList<Student> deleteStudent(@PathVariable long id) {
        Student student = students.stream().filter(s ->s.getId() == id).collect(Collectors.toList()).get(0);
        students.remove(student);
        return  students;
    }
    @RequestMapping( method = RequestMethod.POST)
    public ArrayList<Student> createStudent(@RequestBody Student student) {
        students.add(student);
        return  students;
    }



*/



/*************************************************************************************/

  private ArrayList<Student> students = new ArrayList<Student>();
  /*  {
        students.add(new Student(21, "Mary"));
        students.add(new Student(19, "Peter"));
        students.add(new Student(23, "Lauren"));
        students.add(new Student(24, "Thomac"));
        students.add(new Student(17, "Marianna"));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getStudent(@PathVariable int id) {
        return  students.stream().filter(student ->student.getId() == id).collect(Collectors.toList()).get(0);
    }
    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<Student> getAllStudents() {
        return  students;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ArrayList<Student> deleteStudent(@PathVariable long id) {
        Student student = students.stream().filter(s ->s.getId() == id).collect(Collectors.toList()).get(0);
        students.remove(student);
        return  students;
    }
    @RequestMapping( method = RequestMethod.POST)
    public ArrayList<Student> createStudent(@RequestBody Student student) {
        students.add(student);
        return  students;
    }

*/
}
