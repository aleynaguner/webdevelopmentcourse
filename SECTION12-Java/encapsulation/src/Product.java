public class Product {
    //attributes || field
    private int _id;
    private String name;
    private String description;
    double price;
    int stockAmount;

    //getter
    public int getId() {
        return _id;
    }

    //setter
    public void setId(int id) {
        _id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
