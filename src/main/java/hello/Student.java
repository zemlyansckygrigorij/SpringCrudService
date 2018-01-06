package hello;

public class Student{
    private static long count;
    private final long id;
    private String name;
    private long age;
    static{
        count = 1;
    }
    public Student(long age, String name) {
        this.id = count;
        this.age = age;
        this.name = name;
        count++;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public long getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setAge(long age) {
        this.age = age;
    }
    public String toString() {
        return name;
    }
}

