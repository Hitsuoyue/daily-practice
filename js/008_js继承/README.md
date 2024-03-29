### 1. 树 —— 一种非线性表结构

> * 根节点：最上层，没有父节点的节点
> * 父子关系：用来连接相邻节点之间的关系
> * 父节点：上层来源节点
> * 子节点：下层分支节点
> * 兄弟节点：拥有同一个父节点
> * 叶子节点：没有子节点的节点
> * 高度：从下往上度量，从0开始，最底层的高度为0，往上依次递增
> * 深度：从上往下度量，从0开始，最上层的深度为0，往下依次递增
> * 层数：从上往下度量，从1开始，根节点位于第一层，往下依次递增

### 2. 二叉树 —— 每个节点最多有两个子节点
> * 满二叉树：叶子节点全都在最底层，除叶子节点外，其他节点都有两个子节点
> * 完全二叉树：叶子节点都在最底下两层，最后一层的叶子节点都靠左排列，除了最后一层外其它层的节点个数都达到最大

#### 2.1 二叉树的存储
> * 基于链表的链式存储
> * 基于数组的顺序存储

**基于数组存储**
> * 根节点存储在下标为i=1的位置，则其左子节点存储在 2*i=2 的位置，右子节点存储在 2*i+1=3 的位置，同理，若一个节点的下标为 i，其左子节点存储在 2*i 的位置，右子节点存储在 2*i+1 的位置。
> * 如上，若是一个完全二叉树，则存储位置是连续的，节点也是连续的，但若不是完全二叉树，则有许多位置是没有存储数据，会导致空间的浪费。
> * 因此，对完全二叉树来说，用数组存储是最节省内存的方式。

#### 2.2 二叉树的遍历
二叉树的遍历有三种经典方法：前序遍历、中序遍历、后序遍历，所说的前中后指的是节点相对于他的左右子树打印的顺序，即在左右子树之前、之中还是之后。
> * 前序遍历：先打印**这个节点**，再打印其左子树，再打印其右子树
> * 中序遍历：先打印其左子树，再打印**这个节点**，再打印其右子树
> * 后序遍历：先打印其左子树，再打印其右子树，再打印**这个节点**

**注：**前中后序遍历，每个节点最多会被访问两次，所以遍历操作的时间复杂度与节点个数n成正比，即为O(n)。

#### 2.3 二叉查找树 —— 快速查找、插入、删除
**二叉查找树：**树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，其右子树节点的值都大于这个节点的值。
##### 2.3.1 二叉查找树的查找
从根节点开始，对于每一个节点：
* 如果它等于要查找的值，就返回；
* 如果它小于要查找的值，就在右子树递归查找；
* 如果大于要查找的值，就在左子树递归查找。
##### 2.3.2 二叉查找树的插入
新插入的数据一般在叶子节点上，跟查找类似，从根节点开始，对于每一个节点:
* 如果它小于要插入的值，且右子节点为空，则插入它的右子节点位置，若右子节点不为空，则继续递归右子树；
* 如果它大于要插入的值，且左子节点为空，则插入它的左子节点位置，若左子节点不为空，则继续递归左子树。
##### 2.3.2 二叉查找树的删除
比如要删除的节点为节点A

1. 节点A没有子节点，只需要直接将父节点中指向节点A的指针置为null；
2. 节点A只有一个子节点，将父节点中指向节点A的指针指向它的子节点；
3. 节点A有两个子节点，遍历找到节点A右子树中的最小节点，把它的值替换到节点A上，然后再删除找到的那个最小节点。

**注：**

二叉树的删除有个简单、取巧的方法，就是将节点A标记为“已删除”，实际上并没有从书中删掉这个节点A。这样操作简单了很多，但节点A仍然存储在内存中，浪费空间。

##### 2.3.3 其他操作
* 二叉查找树可快速找到最大节点、最小节点
* 中序遍历二叉查找树，可以输出有序的数据序列，时间复杂度为O(n)，很高效。
