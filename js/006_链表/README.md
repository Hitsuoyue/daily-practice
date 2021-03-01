> * 数组需要一块连续的内存空间来存储
> * 链表则是通过指针将一组零散的内存块串联起来使用


### 单链表：
串联起来的内存块成为“结点”，内各节点除了存储数据，还要记录链上的下一个结点的地址，这个记录下个结点地址的指针叫做**后继指针next**

> * 第一个和最后一个结点分别成为头结点和尾结点；
> * 头结点记录了链表的基地址，通过它就可遍历得到整条链表；
> * 尾结点的指针指向空地址 null；


### 循环链表
循环链表与单链表的唯一区别是它的尾结点指针指向头结点，适合处理环形结构数据，如解决**约瑟夫问题**

### 双向链表
双向链表每个节点除了存储数据，有后继指针来指向后面的节点，还有一个**前驱指针prev**来指向前面的节点，相对于单链表，更占内存，但有些时候灵活性更高。

**效率更高的情况**
* 当删除给定指针指向的结点时，需要知道其前驱结点的指针，这时候单链表需要遍历查找，时间复杂度为O(n)，而双向链表只需要O(1)的时间复杂度就可以。
* 在链表的某个节点前面插入一个节点，同上，单向链表需要O(n)的时间复杂度，而双向链表只需要O(1)的时间复杂度就可以。
* 有序链表可以相对于上次查找的位置p的值大小，决定向前找还是向后找。
**空间换时间** —— 缓存就是空间换时间的实践
以上就是尽管双向链表比单向链表更费内存，但实际中应用更加广泛的原因。Java 中的 LinkedHashMap 就用到了双向链表这种数据结构。

**数组和链表**
数组使用连续内存空间，可以借助CPU的缓存机制，预读数组中的数据，访问效率更高，而链表不是连续存储，无法预读。
但




**链表和数组**
> * 数组需要一块**连续的内存空间**来存储，可以借助CPU的缓存机制，预读数组中的数据；链表则是通过指针将一组**零散的内存块**串联起来使用，无法预读。
> * 数组的大小是固定的，一经声明就要占用整块连续空间；而链表本身没有大小限制，天然支持动态扩容。
> * 数组是有序的，它的插入或删除需要做大量的数据搬移，时间复杂度是O(n)；而链表的插入或删除只需要考虑相邻结点的指针改变，时间复杂度是O(1)。
> * 链表的随机访问不够高效，需要遍历才能找到，时间复杂度是O(n)；而数组可以直接通过下标访问，时间复杂度是O(1)。

**注：**
* Java中的ArrayList容器支持动态扩容，但当起内存空间不够时，会申请个更大的空间，将数据拷贝过去，数据拷贝是非常耗时的。
* 链表相对数组，内存消耗会翻倍，且对链表进行频繁的插入、删除操作，会导致频繁的内存申请和释放，容易造成内存碎片，可能会造成Java的频繁GC。

**带头链表**
有哨兵结点的链表叫**带头链表**。无论链表是不是空，head指针始终指向这个哨兵结点。



https://www.cnblogs.com/qianguyihao/p/4782595.html
题目：链表反转(递归)、有序链表合并

**结点**
```java
public class Node {
    private int data;  //数据
    private Node next;  //指针
    
    public int getData() {
        return data;
    }
    public void setData(int data) {
        this.data = data;
    }
    public Node getNext() {
        return next;
    }
    public void setNext(Node next) {
        this.next = next;
    }    
}
```

**链表**

```java
public class Link {
    private int size = 0;
    private Node first;
    private Node last;
    
    /*链表初始化 */
    public Link(){}
    
    /**
     * 返回链表长度
     * @return 返回链表长度
     */
    public int getLength(){
        return size;
    }
    
    /**
     * 获取指定位置的节点
     * @param index 位置[0~size]
     * @return 
     */
    public Node get(int index){
        Node temp = first;
        for(int i=0;i<index;i++){
            temp = temp.getNext();
        }
        return temp;
    }
    
    /**
     * 链表中插入第一个元素时，头和尾时同一个元素
     * @param element
     */
    private void onetNode(int element){
        first = new Node();
        first.setData(element);
        last = first;
    }
    
    /**
     * 链表只剩一个节点时，清除first和last
     */
    private void clear(){
        first = null;
        last = null;
        size = 0;
    }
    
    /**
     * 插入尾节点
     * @param element
     */
    public void addTail(int element){
        if(size==0){   //链表为空时，插入尾节点即第一个节点
            onetNode(element);
        }else{
            Node node = new Node();
            node.setData(element);
            last.setNext(node);
            last = node;   //尾节点设置为插入的节点
        }
        size++;
    }
    
    /**
     * 链表头插入
     * @param element
     */
    public void addHead(int element){
        if(size==0){
            onetNode(element);
        }else{
            Node node = new Node();
            node.setData(element);
            node.setNext(first);  //新插入元素的指针指向原头元素
            first = node;  //新插入的元素设为头节点
        }
        size++;
    }
    
    /**
     * 插入中间元素，考虑头尾两种特殊情况
     * @param index 位置
     * @param element  值
     */
    public void add(int index,int element){
        if(index < size){  
            if(size==0){  //空链表
                onetNode(element);
                size++;
            }else if(index==0){ //插入的位置是头
                addHead(element);
                size++;
            }else if(size==index+1){  //插入的位置是尾
                addTail(element);
                size++;
            }else{  
                Node temp = get(index);   //获取插入位置的节点
                Node node = new Node();   //插入新节点
                node.setData(element);
                node.setNext(temp.getNext());  
                temp.setNext(node);
                size++;
            }
        }else{
                throw new IndexOutOfBoundsException("插入位置无效或超出链表长度");
        }
    }
    
    /**
     * 删除头节点
     */
    public void deleFirst(){
        if(size==0){
            throw new IndexOutOfBoundsException("空链表，无元素可删除");
        }else if(size==1){ //只剩一个节点时，清除first和last
            clear();
        }else{
            Node temp = first;  //为了将删除的头结点置空
            first = first.getNext();
            temp = null;
            size--;
        }
    }
    
    /**
     * 删除尾节点
     */
    public void deleLast(){
        if(size==0){
            throw new IndexOutOfBoundsException("空链表，无元素可删除");
        }else if(size==1){ //只剩一个节点时，清除first和last
            clear();
        }else{
            Node temp = get(size-1);  //获取最后元素的前一个节点（前驱）
            temp.setNext(null);
            size--;
        }
    }
    
    /**
     * 删除中间元素，考虑了头尾和超界
     * @param index 位置
     */
    public void deleMid(int index){
        if(size==0){
            throw new IndexOutOfBoundsException("空链表，无结点可删");
        }else if(size==1){
            clear();
        }else{
            if(index==0){
                deleFirst();
            }else if(index==size-1){
                deleLast();
            }else if(index>size){
                throw new IndexOutOfBoundsException("删除位置超界");
            }else{
                Node temp = get(index-1);
                temp.setNext(get(index));
                temp.setNext(null);
                size--;
            }
        }
    }
    
    /**
     * 获取链表
     */
    public void getAll(){
        Node temp = first;
        System.out.println(temp.getData());
        while(temp.getNext()!=null){
            System.out.print(temp.getData()+"-->");
            temp = temp.getNext();
            size--;
        }
    }    
}
``

**测试代码**
```java
public class LinkTest {
    public static void main(String[] args) {
        Link link = new Link();
        link.addHead(1); //1
        link.printLink();
        
        link.addHead(5); //5->1
        link.printLink();
        
        link.addTail(9); //5->1->9
        link.printLink();
        
        link.addTail(7); //5->1->9->7
        link.printLink();
        
        link.add(3,8);  //5->1->9->8->7
        link.printLink();        
        System.out.println("链表长度："+link.getLength()); //5
        
        link.deleFirst();  //1->9->8->7
        link.printLink();
        
        link.deleLast();  //1->9->8
        link.printLink();
        
        link.deleMid(1);  //1->8
        link.printLink();
        
        System.out.println("链表长度："+link.getLength()); //2        
    }
}

```

**指针反转实现链表反转代码**
```java
    /**
     * 反转链表
     */
    public void lindRevese(){
        Node temp = first;
        last = temp;
        Node next = first.getNext();
        for (int i = 0; i < size-1; i++) {
            Node nextNext = next.getNext(); //获取当前下下个元素
            next.setNext(temp);
            temp = next;
            next = nextNext;
        }
        last.setNext(null);
        first = temp;
    }
    //测试
    public class LinkReverse {
    public static void main(String[] args) {
        Link link = new Link();
        link.add(0,1); //1
        link.add(1,2); //1->2
        link.add(2,3); //1->2->3
        link.add(3,4); //1->2->3->4
        link.add(4,5); //1->2->3->4->5
        link.printLink();//1->2->3->4->5
        link.lindRevese();
        link.printLink();//5->4->3->2->1
    }    
}
```