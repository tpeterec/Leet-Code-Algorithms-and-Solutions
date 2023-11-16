import java.util.HashSet;
import java.util.List;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> hashset = new HashSet<>();
        for(int n : nums) {
            if(hashset.contains(n)) {
                return true;
            }
            hashset.add(n);  
        }
        return false;
    }
}